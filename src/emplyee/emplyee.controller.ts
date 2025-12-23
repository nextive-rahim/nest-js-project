import { Controller, Get } from '@nestjs/common';

@Controller('emplyee')
export class EmplyeeController {
  @Get()
  getEmployee(): string {
    return 'Get all employee !';
  }
}
