import React from 'react';
import Image from 'next/image';
import { LatestArticles } from '@/types/Article';

interface MainImageProps {
  latestArticles: LatestArticles[];
}

const MainImage: React.FC<MainImageProps> = ({ latestArticles }) => {
  const mainArticle = latestArticles[0]; // Lấy bài viết đầu tiên

  return (
    <div className="relative"> 
      <Image
        src={mainArticle.primaryImage.url}
        alt={mainArticle.primaryImage.alternativeText || 'Mô tả hình ảnh'}
        width={800}  
        height={400} 
        layout="responsive"
        className="rounded-lg object-cover !h-[400px]"
      />
      <div className="mt-4">
        <div className="text-xs font-medium text-slate-600 mb-1 border border-transparent bg-slate-300 bg-opacity-50 px-2 py-1 rounded-full inline-block">
          {mainArticle.category.name}
        </div>
        <h3 className="text-lg font-bold text-black">{mainArticle.name}</h3> 
      </div>
    </div>
  );
};

export default MainImage;
