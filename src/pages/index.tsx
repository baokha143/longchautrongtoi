// src/pages/index.tsx
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
