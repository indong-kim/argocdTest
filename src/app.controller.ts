import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string{
    return "argocd test binary";
  }

  @Get('test2')
  getTest2(): string{
    return "argocd test 2";
  }
}
