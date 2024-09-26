// pages/about.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl font-bold">Giới thiệu về chúng tôi</h1>
        <p className="mt-4">Chúng tôi là một cửa hàng cung cấp các sản phẩm chăm sóc sức khỏe tốt nhất. Với cam kết mang lại sức khỏe và sự hài lòng cho khách hàng.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
