import { All, Controller, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ProxyService } from '../proxy/proxy.service';

@Controller('templates')
export class TemplatesGatewayController {
  constructor(private readonly proxyService: ProxyService) {}

  @All()
  @All('*path')
  forward(@Req() request: Request, @Res() response: Response) {
    return this.proxyService.forward(
      request,
      response,
      'http://localhost:3002',
    );
  }
}
