/* eslint-disable prettier/prettier */
import { Product } from 'src/model/product';

export class ProductDTO {
  private id: number;
  private name: string;
  private price: number;
  private amount: number;
  private totalPrice: number;

  constructor(name: string, price: number, amount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  private setId(id: number): void {
    this.id = id;
  }

  private setTotalPrice(totalPrice: number): void {
    this.totalPrice = totalPrice;
  }

  public static toDTO(product: Product): ProductDTO {
    const productDto: ProductDTO = new ProductDTO(
      product.getName(),
      product.getPrice(),
      product.getAmount()
    );
    productDto.setId(product.getId());
    productDto.setTotalPrice(product.getTotalPrice());
    return productDto;
  }

  public static toProduct(productDTO: ProductDTO): Product {
    return new Product(productDTO.name, productDTO.price, productDTO.amount);
  }
}
