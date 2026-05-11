import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ParticipantsGatewayController } from './participants/participants-gateway.controller';
import { ProxyService } from './proxy/proxy.service';
import { SessionsGatewayController } from './sessions/sessions-gateway.controller';
import { TemplatesGatewayController } from './templates/templates-gateway.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGO_URI'),
      }),
    }),
    AuthModule,
    HttpModule,
  ],
  controllers: [
    AppController,
    ParticipantsGatewayController,
    SessionsGatewayController,
    TemplatesGatewayController,
  ],
  providers: [AppService, ProxyService],
})
export class AppModule {}
