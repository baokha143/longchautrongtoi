// views/home/HomePage.tsx

import ProductList from "@/components/ProductList";
import Banner from "@/views/home/Banner";


const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
};

export default HomePage;
