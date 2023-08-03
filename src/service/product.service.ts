/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/api/dto/productDTO';
import { Product } from 'src/model/product';

@Injectable()
export class ProductService {
  // db simulator
  private static productList: Product[] = [];
  
  private static toDTOList(productList: Array<Product>) {
    return productList.map(
      (product: Product) => ProductDTO.toDTO(product)
    );
  }

  public save(product: Product): void {
    ProductService.productList.push(product);
  }

  public read(): Array<ProductDTO> {
    return ProductService.toDTOList(ProductService.productList);
  }
}
