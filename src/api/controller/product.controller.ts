/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from 'src/service/product.service';
import { ProductDTO } from '../dto/productDTO';

@Controller("/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public get(): Promise<any> {
    return this.productService.read();
  }

  @Post()
  public post(@Body() productDTO: ProductDTO): Promise<any> {
    this.productService.save(ProductDTO.toProduct(productDTO));
    return this.productService.read();
  }
}

