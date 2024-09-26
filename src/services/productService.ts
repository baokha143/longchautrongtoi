// services/productService.ts
import { fetcher } from './api';
import { Product } from '@/types/Product';

export const getProducts = async (): Promise<Product[]> => {
  const data = await fetcher('https://pubapi-stg.fptshop.com.vn/lccus/ci-cms/api/v1/pages/home');
  
  // Giả sử rằng data.products chứa danh sách sản phẩm
  return Array.isArray(data.products) ? data.products : []; // Đảm bảo trả về mảng
};
