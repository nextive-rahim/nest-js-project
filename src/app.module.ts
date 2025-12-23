import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmplyeeModule } from './emplyee/emplyee.module';
import { CategoryModule } from './category/category.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [EmplyeeModule, CategoryModule],
  controllers: [AppController, UserController, ProductController, StudentController],
  providers: [AppService, ProductService, StudentService],
})
export class AppModule {}
