import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOrder(): any {
    const SERVER_NAME = process.env.HOSTNAME;
    return {
      service: 'order-service',
      server: SERVER_NAME,
      time: new Date().toISOString(),
    };
  }
}
