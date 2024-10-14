// Xuất các type để sử dụng ở nơi khác trong dự án
export type HealPageProps = {
  data: {
    id: number;
    attributes: Attributes;
  };
};

export type Attributes = {
  categories: Category[]; // Sử dụng type Category đã được định nghĩa
  isAutoTag: boolean; 
  titleExpTeam: string;
  linkExpTeam: string | null;
  titleFeaturedTag: string;
  linkFeaturedTag: string;
  featuredTags: { data: FeaturedTag[] }; // Cập nhật kiểu của featuredTags
  seo: null;
  expTeam: { data: ExpTeam[] }; // Cập nhật kiểu của expTeam để phản ánh cấu trúc
  latestArticles: LatestArticles[];  // Đảm bảo LatestArticles đã được định nghĩa
};

// Định nghĩa type Category
export interface Category {
  id: number;
  name: string;
  fullPathSlug: string;
  children: Category[]; // Đệ quy để lồng danh mục con
  articles?: Article[]; // Các bài viết thuộc danh mục
}

// Định nghĩa type Article
export type Article = {
  id: number;
  name: string;
  slug: string;
  redirectUrl: string | null;
  shortDescription?: string;
  primaryImage?: {
    id: number;
    url: string;
    alternativeText?: string | null;
  };
  category: {
    value: number;
    isPrimary: boolean;
    id: number;
    name: string;
    fullPathSlug: string;
  };
};

// Định nghĩa type FeaturedTag
export type FeaturedTag = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    numberOfArticles: number;
  };
};

// Cập nhật kiểu ExpTeam để phản ánh cấu trúc của dữ liệu API
export type ExpTeam = {
  id: number;
  attributes: {
    fullName: string;
    specialty: string | null;
    position: string | null;
    degree: string | null;
    avatar: Avatar | null; // Avatar có thể null
  };
};

export type Avatar = {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
    };
  } | null;
};

// Cập nhật LatestArticles để bao gồm các thuộc tính mới
export type LatestArticles = {
  id: number;
  name: string; // Tên bài viết
  slug: string; // Slug của bài viết
  primaryImage: {
    id: number;
    url: string; // URL của hình ảnh chính
    alternativeText: string | null; // Văn bản thay thế cho hình ảnh
  };
  category: {
    id: number;
    fullPathSlug: string; // Đường dẫn đầy đủ của slug
    name: string; // Tên danh mục
  };
};
