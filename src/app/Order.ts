export interface Order {
  customer: string;
  product: string;
  quantity: number;
  price: number;
  coupon?: string;
  _id?: string;
}
