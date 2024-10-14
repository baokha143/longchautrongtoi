// src/pages/index.tsx
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import { getProductBySku } from '@/services/productService';
import { Product } from "@/types/Product"; 

// Fetch data server-side
export const getServerSideProps: GetServerSideProps<{ products: Product[] }> = async () => {
  const skuList = ['00500347', '00502343', '00027454', '00032485', '00033432', '00502441', '00501117', '00029556', '00021449', '00502934', '00503437', '00022006'];

  try {
    const products = await getProductBySku(skuList);
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } }; // Trả về mảng rỗng nếu có lỗi
  }
};

// Home component nhận props từ getServerSideProps
const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header />
      <Banner />
      {/* Truyền products vào ProductList */}
      <ProductList products={products} /> 
      <Footer />
    </>
  );
};

export default Home;
