export interface Product {
  id: string;
  category: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  enable: boolean;
  onSale: boolean;
  qtdSold: number;
  createAt: string;
}
