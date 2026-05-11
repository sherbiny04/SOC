import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import type { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const { status, message } = this.resolveError(exception);

    response.status(status).json({
      success: false,
      message,
    });
  }

  private resolveError(exception: unknown) {
    if (exception instanceof AxiosError) {
      return this.resolveAxiosError(exception);
    }

    if (exception instanceof HttpException) {
      return {
        status: exception.getStatus(),
        message: this.extractMessage(exception.getResponse()),
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };
  }

  private resolveAxiosError(exception: AxiosError) {
    if (exception.code === 'ECONNREFUSED') {
      return {
        status: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'Microservice is unavailable',
      };
    }

    if (exception.code === 'ECONNABORTED' || exception.message.includes('timeout')) {
      return {
        status: HttpStatus.GATEWAY_TIMEOUT,
        message: 'Microservice request timed out',
      };
    }

    if (exception.response) {
      const status = exception.response.status;

      return {
        status,
        message:
          status === HttpStatus.NOT_FOUND
            ? 'Requested microservice route was not found'
            : this.extractMessage(exception.response.data),
      };
    }

    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'Microservice request failed',
    };
  }

  private extractMessage(responseBody: unknown): string {
    if (typeof responseBody === 'string') {
      return responseBody;
    }

    if (
      responseBody &&
      typeof responseBody === 'object' &&
      'message' in responseBody
    ) {
      const message = (responseBody as { message: unknown }).message;

      if (Array.isArray(message)) {
        return message.join(', ');
      }

      if (typeof message === 'string') {
        return message;
      }
    }

    return 'Request failed';
  }
}
