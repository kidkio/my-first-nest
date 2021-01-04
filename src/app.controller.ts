import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get은 접속한 페이지에 따라 아래의 함수를 시행하는 역할을 한다. get url
  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone.';
  }
}
