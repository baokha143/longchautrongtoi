import { Category } from "@/types/Article";
import React from "react";
import Image from "next/image";

interface ArticleProps {
  categories: Category[]; // Sử dụng type Category
}

const MainArticleContent: React.FC<ArticleProps> = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md item-news md:mt-[16px]">
      {/* Lặp qua tất cả các danh mục */}
      {categories.map((mainCategory) => (
        <div key={mainCategory.id}>
          {/* Hiển thị tên danh mục chính */}
          {mainCategory && (
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">{mainCategory.name}</h2>
              <a href="#" className="text-blue-500 hover:underline mt-2 md:mt-0">Xem tất cả</a>
            </div>
          )}

          {/* Các danh mục con */}
          <div className="flex flex-wrap mt-2 text-gray-600 space-x-4">
            {mainCategory.children.map((child) => (
              <span
                key={child.id}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
              >
                {child.name}
              </span>
            ))}
          </div>

          {/* Hàng đầu tiên: 1 bài viết chính và 1 bài viết phụ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Bài viết chính */}
            {mainCategory.articles?.slice(0, 1).map((article) => (
              <div key={article.id} className="col-span-1 md:col-span-2 p-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
                <div className="content flex flex-col md:flex-row">
                  {/* Hình ảnh của bài viết chính */}
                  <div className="images mt-2 md:mr-3 md:h-[168px] md:w-[286px] md:rounded-lg overflow-hidden">
                    <Image
                      src={article.primaryImage?.url || "/path/to/default-image.jpg"} // Đường dẫn đến hình ảnh
                      alt={article.primaryImage?.alternativeText || article.name} // Alt text
                      width={286} // Chiều rộng
                      height={168} // Chiều cao
                      loading="lazy" // Tải hình ảnh khi cần
                      decoding="async" // Giải mã hình ảnh bất đồng bộ
                      className="rounded-lg object-cover w-full h-full" // Class CSS
                    />
                  </div>

                  {/* Nội dung của bài viết chính */}
                  <div className="info flex-1 mt-2 md:mt-0">
                    <div className="bg-slate-300 text-slate-800 text-xs rounded-md p-1 mb-2 inline-block">
                      {mainCategory.name}
                    </div>
                    <h3 className="text-gray-700 font-bold">{article.name}</h3>
                    <p className="text-gray-500 mt-1 text-sm line-clamp-4">
                      {article.shortDescription || "No description available"}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bài viết phụ 1 */}
            {mainCategory.articles?.slice(1, 2).map((article) => (
              <div key={article.id} className="p-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-slate-300 text-slate-800 text-xs rounded-md p-1 mb-2 inline-block">
                  {mainCategory.name}
                </div>
                <h3 className="text-gray-700 font-bold">{article.name}</h3>
                <p className="text-gray-500 mt-1 text-sm line-clamp-4">
                  {article.shortDescription || "No description available"}
                </p>
              </div>
            ))}
          </div>

          {/* Hàng thứ hai: 3 bài viết phụ còn lại */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {mainCategory.articles?.slice(2, 5).map((article) => (
              <div
                key={article.id}
                className="p-2 border rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="bg-slate-300 text-slate-800 text-xs rounded-md p-1 mb-2 inline-block">
                  {mainCategory.name}
                </div>
                <h3 className="text-gray-700 font-bold">{article.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainArticleContent;
