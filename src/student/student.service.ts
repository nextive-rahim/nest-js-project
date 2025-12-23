import { Injectable, NotAcceptableException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Abdul Rahim', age: 35 },
    { id: 1, name: 'Abdul Rahim1', age: 36 },
    { id: 1, name: 'Abdul Rahim2', age: 37 },
  ];
  /// Get Method
  getAllStudents() {
    return this.students;
  }
  studentBtID(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotAcceptableException('Student not found');
    return student;
  }

  /// Post method
  addNewStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return this.students;
  }

  /// PUT
  updateStudentAllData(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((v) => v.id === id);
    if (index === -1) throw new NotAcceptableException('Student not found');
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  /// Patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotAcceptableException('Student not found');
    Object.assign(student, data);
    return student;
  }

  /// Delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((v) => v.id === id);
    if (index === -1) throw new NotAcceptableException('Student not found');
    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deleted', student: deleted[0] };
  }
}
