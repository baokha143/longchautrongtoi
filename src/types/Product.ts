// src/types/Product.ts
export interface Product {
  id: number; 
  name: string;
  description?: string; // Mô tả sản phẩm, có thể không có
  imageUrl?: string; 
  unitPrice?: string; 
  packaging?: string; 
}
