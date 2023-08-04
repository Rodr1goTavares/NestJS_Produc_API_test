import { Module } from '@nestjs/common';
import { AppController } from './api/controller/app.controller';
import { AppService } from './service/app.service';
import { ProductService } from './service/product.service';
import { ProductController } from './api/controller/product.controller';
import { PrismaService } from './repository/prisma.service';
import { ProductRepository } from './repository/productRepository';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, PrismaService, ProductRepository],
})
export class AppModule {}
