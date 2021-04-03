export interface Order {
  customerId: string;
  productId: string;
  quantity: number;
  price: number;
  coupon?: 'aaaa';
  _id?: string;
}
