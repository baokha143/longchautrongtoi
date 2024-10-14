import React from 'react';
import Image from 'next/image';
import { LatestArticles } from '@/types/Article';

type ArticleListProps = {
  articles: LatestArticles[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <div className="grid gap-4">
    {articles.slice(1).map((item) => (
      <div key={item.id} className="flex items-center gap-3 pb-3">
        <div className="flex-shrink-0 w-[151px] h-[84px] relative">
          <Image
            src={item.primaryImage.url}
            alt={item.primaryImage.alternativeText || item.name}
            layout="fill"
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium text-slate-600 mb-1 border border-transparent bg-slate-300 bg-opacity-50 px-2 py-1 rounded-full inline-block">
            {item.category.name}
          </div>
          <h3 className="text-sm font-semibold text-black">
            {item.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
);

export default ArticleList;
