/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { Product } from 'src/model/product';

export class ProductRepository {
  private prisma = new PrismaClient();

  public async save(product: Product): Promise<void> {
    try {
      await this.prisma.product.create({data: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        amount: product.getAmount(),
        totalPrice: product.getTotalPrice()
      }});
      console.log(`Saved product: ${product}`);
    } 
    catch (exception) {
      console.log(`Error to save Product: ${exception}`);
    } 
    finally {
      await this.prisma.$disconnect();
    }
  }

  public async read(): Promise<any> { 
    try {
      return await this.prisma.product.findMany();
    }
    catch(exception) {
      console.log(`Error to get Products: ${exception}`)
      return null;
    }
    finally {
      await this.prisma.$disconnect();
    }
  }
}
