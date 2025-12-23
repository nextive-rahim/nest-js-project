import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmplyeeModule } from './emplyee/emplyee.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [EmplyeeModule, CategoryModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
