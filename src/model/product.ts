/* eslint-disable prettier/prettier */
export class Product {
  private id: number;
  private name: string;
  private price: number;
  private amount: number;

  constructor(name: string, price: number, amount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number ): void {
    this.amount = amount;
  }

  public getTotalPrice(): number {
    return this.price * this.amount;
  }
}