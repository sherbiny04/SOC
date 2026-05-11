import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantsGatewayController } from './participants/participants-gateway.controller';
import { ProxyService } from './proxy/proxy.service';
import { SessionsGatewayController } from './sessions/sessions-gateway.controller';
import { TemplatesGatewayController } from './templates/templates-gateway.controller';

@Module({
  imports: [HttpModule],
  controllers: [
    AppController,
    ParticipantsGatewayController,
    SessionsGatewayController,
    TemplatesGatewayController,
  ],
  providers: [AppService, ProxyService],
})
export class AppModule {}
