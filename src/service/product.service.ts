/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/api/dto/productDTO';
import { Product } from 'src/model/product';
import { PrismaService } from 'src/repository/prisma.service';
import { ProductRepository } from 'src/repository/productRepository';

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService, private productRepository: ProductRepository) {}
  
  private static toDTOList(productList: Array<Product>) {
    return productList.map(
      (product: Product) => ProductDTO.toDTO(product)
    );
  }

  public save(product: Product): void {
    this.productRepository.save(product);
  }

  public read(): Promise<any> {
    return this.productRepository.read();
  }
}
