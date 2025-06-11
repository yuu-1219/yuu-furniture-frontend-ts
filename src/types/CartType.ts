export interface CartItemType {
    productId: string;
    quantity: number;
    color: string;
  }
  
  export interface CartType  {
    _id?: string;
    userId: string | null;
    items: CartItemType[];
    totalQty: number;
    totalPrice: number;
    updatedAt: string | null;
  }