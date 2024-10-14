import { FeaturedTag } from '@/types/Article';
import React from 'react';

interface FeatureListProps {
  featuredTags: FeaturedTag[]; // Chắc chắn rằng prop là một mảng các FeaturedTags
}

const FeaturedTopics: React.FC<FeatureListProps> = ({ featuredTags }) => {
  if (!Array.isArray(featuredTags) || featuredTags.length === 0) {
    return <div className="text-center p-4">Không có chuyên đề nổi bật nào</div>;
  }

  return (
    <div className="bg-blue-50 p-4 rounded-lg max-w-sm mx-auto"> {/* Bố cục responsive */}
      <h3 className="text-blue-600 font-bold text-lg text-center">Chuyên đề nổi bật</h3>
      <ul className="mt-4 space-y-2">
        {featuredTags.map((tag) => (
          <li key={tag.id} className="flex justify-between items-center">
            <span className="font-bold text-gray-700"># {tag.attributes.title}</span>
            <p className="text-sm text-gray-500">{tag.attributes.numberOfArticles} bài viết</p>
          </li>
        ))}
      </ul>
      <div className="mt-2 text-blue-600 font-semibold text-sm flex justify-center">
        <a href="#" className="hover:underline">
          Xem tất cả <span className="ml-1">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default FeaturedTopics;
