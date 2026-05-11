import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosRequestConfig } from 'axios';
import type { Request, Response } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) {}

  async forward(
    request: Request,
    response: Response,
    targetBaseUrl: string,
    options: { stripPrefix?: string } = {},
  ) {
    const upstreamResponse = await firstValueFrom(
      this.httpService.request({
        method: request.method as AxiosRequestConfig['method'],
        url: `${targetBaseUrl}${this.getTargetPath(request, options.stripPrefix)}`,
        data: this.methodAllowsBody(request.method) ? request.body : undefined,
        headers: this.getForwardHeaders(request),
      }),
    );

    this.copyResponseHeaders(upstreamResponse.headers, response);

    return response.status(upstreamResponse.status).send(upstreamResponse.data);
  }

  private getTargetPath(request: Request, stripPrefix?: string): string {
    const originalUrl = new URL(request.originalUrl, 'http://gateway.local');
    let pathname = originalUrl.pathname;

    if (stripPrefix) {
      pathname =
        pathname === stripPrefix
          ? '/'
          : pathname.startsWith(`${stripPrefix}/`)
            ? pathname.slice(stripPrefix.length)
            : pathname;
    }

    return `${pathname}${originalUrl.search}`;
  }

  private getForwardHeaders(request: Request) {
    const excludedHeaders = new Set([
      'connection',
      'content-length',
      'host',
      'transfer-encoding',
    ]);
    const headers: Record<string, string | string[]> = {};

    for (const [key, value] of Object.entries(request.headers)) {
      if (!excludedHeaders.has(key.toLowerCase()) && value !== undefined) {
        headers[key] = value;
      }
    }

    return headers;
  }

  private copyResponseHeaders(
    headers: Record<string, unknown>,
    response: Response,
  ) {
    const excludedHeaders = new Set([
      'connection',
      'content-length',
      'transfer-encoding',
    ]);

    for (const [key, value] of Object.entries(headers)) {
      if (!excludedHeaders.has(key.toLowerCase()) && value !== undefined) {
        response.setHeader(key, value as string | string[]);
      }
    }
  }

  private methodAllowsBody(method: string): boolean {
    return !['GET', 'HEAD'].includes(method.toUpperCase());
  }
}
