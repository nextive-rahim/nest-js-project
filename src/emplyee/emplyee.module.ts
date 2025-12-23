import { Module } from '@nestjs/common';
import { EmplyeeController } from './emplyee.controller';
import { EmplyeeService } from './emplyee.service';

@Module({
  controllers: [EmplyeeController],
  providers: [EmplyeeService],
})
export class EmplyeeModule {}
