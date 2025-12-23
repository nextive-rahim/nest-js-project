import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudent() {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getSpecificStudent(@Param('id') id: string) {
    return this.studentService.studentBtID(Number(id));
  }

  @Post()
  addNewStudent(@Body() body: { name: string; age: number }) {
    return this.studentService.addNewStudent(body);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: { name: string; age: number },
  ) {
    return this.studentService.updateStudentAllData(Number(id), body);
  }

  @Patch(':id')
  patvhStudent(
    @Param('id') id: string,
    @Body() data: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
