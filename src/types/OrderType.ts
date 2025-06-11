export interface OrderItem {
    productId: string;
    quantity: number;
    color: string;
  }
  
  export interface OrderType {
    _id?: string;
    orderId: string;
    items: OrderItem[];
    totalQty: number;
    totalPrice: number;
    purchasedAt: string;
  }