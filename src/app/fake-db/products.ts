import { Product } from "../models/product.model";

const PRODUCT_LIST: Product[] = [
  {
    id: '0001',
    category: 'CANECA',
    image:
      'https://cdn.pixabay.com/photo/2020/04/25/08/44/mug-5089934_1280.jpg',
    title: 'Caneca de porcelanato',
    price: 50.00,
    quantity: 2,
    enable: true,
    onSale: false,
    qtdSold: 1,
    createAt: '2024-08-05'
  },
  {
    id: '0002',
    category: 'CAMISETA',
    image:
      'https://cdn.pixabay.com/photo/2017/11/14/06/15/shirt-2947548_1280.jpg',
    title: 'Camiseta Feminina 100% Algodão',
    price: 120.00,
    quantity: 10,
    enable: true,
    onSale: true,
    qtdSold: 2,
    createAt: '2024-08-04'
  },
  {
    id: '0003',
    category: 'CANECA',
    image:
      'https://cdn.pixabay.com/photo/2017/05/15/17/43/cup-2315563_960_720.jpg',
    title: 'Caneca de Alumínio',
    price: 40.00,
    quantity: 1,
    enable: true,
    onSale: false,
    qtdSold: 3,
    createAt: '2024-08-03'
  },
  {
    id: '0004',
    category: 'CAMISETA',
    image:
      'https://cdn.pixabay.com/photo/2019/11/02/18/37/blonde-in-the-field-4597100_1280.jpg',
    title: 'Camiseta Masculina 100% Poliester',
    price: 90.00,
    quantity: 4,
    enable: true,
    onSale: true,
    qtdSold: 4,
    createAt: '2024-08-02'
  },
  {
    id: '0005',
    category: 'CAMISETA',
    image:
      'https://cdn.pixabay.com/photo/2017/11/14/06/18/shirt-2947549_960_720.jpg',
    title: 'Camiseta Masculina Social 90% Algodão',
    price: 200.00,
    quantity: 3,
    enable: true,
    onSale: true,
    qtdSold: 8,
    createAt: '2024-08-22'
  },
  {
    id: '0006',
    category: 'CANECA',
    image:
      'https://cdn.pixabay.com/photo/2017/01/12/17/30/warm-and-cozy-1975215_1280.jpg',
    title: 'Caneca de natal',
    price: 70.00,
    quantity: 5,
    enable: true,
    onSale: true,
    qtdSold: 2,
    createAt: '2024-16-22'
  },
];

export const RESPONSE = {
  products: PRODUCT_LIST,
};
