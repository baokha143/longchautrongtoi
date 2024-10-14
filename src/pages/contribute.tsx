import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryList from "@/components/HealthCorner/CategoryList";
import MainImage from "@/components/HealthCorner/MainImage";
import ArticleList from "@/components/HealthCorner/ArticleList";
import MainArticleContent from "@/components/HealthCorner/MainArticleContent";
import FeaturedTopics from "@/components/HealthCorner/FeaturedTopics";
import MedicalTeam from "@/components/HealthCorner/MedicalTeam";
import { HealPageProps } from "@/types/Article";

export const getServerSideProps: GetServerSideProps<{
  latestArticles: HealPageProps["data"]["attributes"]["latestArticles"];
  categories: HealPageProps["data"]["attributes"]["categories"];
  featuredTags: HealPageProps["data"]["attributes"]["featuredTags"]["data"];
  expTeam: HealPageProps["data"]["attributes"]["expTeam"]["data"];
}> = async () => {
  const res = await fetch(
    "https://pubapi-stg.fptshop.com.vn/lccus/ci-cms/api/v1/pages/health"
  );
  const data: HealPageProps = await res.json();

  return {
    props: {
      latestArticles: data.data.attributes.latestArticles,
      categories: data.data.attributes.categories,
      featuredTags: data.data.attributes.featuredTags.data,
      expTeam: data.data.attributes.expTeam.data,
    },
  };
};

const HealthCorner = ({
  latestArticles,
  categories,
  featuredTags,
  expTeam,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!latestArticles || !categories || !featuredTags || !expTeam) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className="bg-white py-8 px-4 md:px-20 lg:px-40"> {/* Sử dụng px linh hoạt */}
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900"> {/* Thay đổi kích thước chữ */}
            Góc sức khoẻ
          </h1>
          <CategoryList categories={categories} />
          <div className="flex flex-col md:flex-row gap-4"> {/* Điều chỉnh gap giữa các phần tử */}
            <div className="md:w-2/3 pr-0 md:pr-6"> {/* Loại bỏ padding phải trên mobile */}
              <MainImage latestArticles={latestArticles} />
            </div>
            <div className="md:w-1/3">
              <ArticleList articles={latestArticles} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 py-6 px-4 md:px-20 lg:px-36"> {/* Điều chỉnh padding cho các kích thước */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white p-4 md:p-6"> {/* Điều chỉnh padding của phần nội dung chính */}
                <MainArticleContent categories={categories} />
              </div>
            </div>
            <div className="space-y-6">
              <FeaturedTopics featuredTags={featuredTags} />
              <MedicalTeam expTeam={expTeam} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthCorner;
