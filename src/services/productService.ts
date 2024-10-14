// productService.ts
import axios from 'axios';
import { Product } from "@/types/Product";

const BASE_URL = "https://pubapi-stg.fptshop.com.vn";

// Hàm lấy sản phẩm theo SKU
export const getProductBySku = async (skuList: string[]): Promise<Product[]> => {
  try {
    const response = await axios.post<Product[]>( 
      `${BASE_URL}/lccus/ci-search-product-service/api/products/ecom/product/search/list`, 
      skuList, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    // Log dữ liệu để kiểm tra phản hồi từ API
    console.log('API Response:', response.data);

    return response.data; // Đảm bảo trả về mảng sản phẩm
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Trả về mảng rỗng trong trường hợp lỗi
  }
};
