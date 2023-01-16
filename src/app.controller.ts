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

  @Get('test4')
  getTest4(): string{
    return "argocd test 4";
  }

  @Get('test5')
  getTest5(): string{
    return "argocd test 5";
  }

  @Get('test6')
  getTest6(): string{
    return "aaa";
  }

  @Get('test7')
  getTest7(): string{
    return "bbb";
  }

  @Get('test8')
  getTest8(): string{
    return "ccc";
  }

  @Get('test9')
  getTest9(): string{
    return 'dddd';
  }
}
