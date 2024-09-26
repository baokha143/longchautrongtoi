// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Nhà thuốc Long Châu. All rights reserved.</p>
        <p>Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacy-policy" className="hover:underline">Chính sách bảo mật</a>
          <a href="/terms" className="hover:underline">Điều khoản sử dụng</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
