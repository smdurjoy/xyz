import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/order')
  getOrder(): any {
    return this.appService.getOrder();
  }
}
