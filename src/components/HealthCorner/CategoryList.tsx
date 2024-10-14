import { Category } from '@/types/Article';
import React from 'react';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="flex gap-4 mb-8 overflow-x-auto whitespace-nowrap"> {/* Bố cục cuộn ngang */}
      {categories.map((category) => (
        <button
          key={category.id}
          className="px-4 py-2 border border-black text-black font-medium rounded-full hover:bg-gray-200 transition duration-200"
          style={{ fontSize: '13px' }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
