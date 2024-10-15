import React from "react";
import { Product } from "@/types/Product";
import Image from "next/image";

interface ProductListProps {
  products: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="bg-orange-50">
      <div className="min-h-screen p-6 md:p-10 lg:p-12 mx-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
            Danh sách sản phẩm
          </h1>
          {products.length === 0 ? (
            <p className="text-black text-center">Không có sản phẩm nào.</p>
          ) : (
            <div className="max-w-[1200px] px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"> {/* Giảm gap giữa các ô sản phẩm */}
              {products.map((product) => (
                <div
                  key={product.sku}
                  className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-500 flex-col shadow-md overflow-hidden"
                >
                  <div className="px-3 block pt-3 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  {/* Div chứa nội dung */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between p-2">
                    <h2 className="overflow-hidden text-slate-800 text-[14px] font-semibold line-clamp-2 md:line-clamp-3 mb-1">
                      {product.name}
                    </h2>
                    {product.prices.map((price) => (
                      <p key={price.id} className="text-black mt-0.5  text-[14px]">
                        Giá {price.measureUnitName}:{" "}
                        <span className="font-semibold text-blue-700">
                          {price.price} {price.currencySymbol}
                        </span>
                      </p>
                    ))}
                    <p className="text-black mt-0.5 text-[14px]">
                      Thương hiệu:{" "}
                      <span className="font-semibold text-[14px]">{product.brand}</span>
                    </p>
                    {/* Nút mua hàng */}
                    <div className="mt-2 px-3">
                      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bg-blue-600 text-text-white active:bg-blue-700 py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                        Mua hàng
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
