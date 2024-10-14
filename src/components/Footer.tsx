// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Thông tin công ty */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold">VỀ CHÚNG TÔI</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="/about"><span className="hover:underline">Giới thiệu</span></Link></li>
            <li><Link href="/store"><span className="hover:underline">Hệ thống cửa hàng</span></Link></li>
            <li><Link href="/license"><span className="hover:underline">Giấy phép kinh doanh</span></Link></li>
            <li><Link href="/operation"><span className="hover:underline">Quy chế hoạt động</span></Link></li>
            <li><Link href="/deposit-policy"><span className="hover:underline">Chính sách đặt cọc</span></Link></li>
            <li><Link href="/content-policy"><span className="hover:underline">Chính sách nội dung</span></Link></li>
            <li><Link href="/exchange-policy"><span className="hover:underline">Chính sách đổi trả thuốc</span></Link></li>
            <li><Link href="/delivery-policy"><span className="hover:underline">Chính sách giao hàng</span></Link></li>
            <li><Link href="/security-policy"><span className="hover:underline">Chính sách bảo mật</span></Link></li>
            <li><Link href="/payment-policy"><span className="hover:underline">Chính sách thanh toán</span></Link></li>
            <li><Link href="/check-invoice"><span className="hover:underline">Kiểm tra hóa đơn điện tử</span></Link></li>
          </ul>
        </div>

        {/* Danh mục */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold">DANH MỤC</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="/health-products"><span className="hover:underline">Thực phẩm chức năng</span></Link></li>
            <li><Link href="/cosmetics"><span className="hover:underline">Dược mỹ phẩm</span></Link></li>
            <li><Link href="/personal-care"><span className="hover:underline">Chăm sóc cá nhân</span></Link></li>
            <li><Link href="/medications"><span className="hover:underline">Thuốc</span></Link></li>
            <li><Link href="/medical-devices"><span className="hover:underline">Trang thiết bị y tế</span></Link></li>
            <li><Link href="/online-orders"><span className="hover:underline">Đặt thuốc online</span></Link></li>
            <li><Link href="/vaccination-center"><span className="hover:underline">Trung tâm Tiêm chủng</span></Link></li>
          </ul>
        </div>

        {/* Thông tin thêm */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold">TÌM HIỂU THÊM</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="/health-tips"><span className="hover:underline">Góc sức khỏe</span></Link></li>
            <li><Link href="/drug-search"><span className="hover:underline">Tra cứu thuốc</span></Link></li>
            <li><Link href="/chemical-search"><span className="hover:underline">Tra cứu dược chất</span></Link></li>
            <li><Link href="/material-search"><span className="hover:underline">Tra cứu dược liệu</span></Link></li>
            <li><Link href="/common-illness"><span className="hover:underline">Bệnh thường gặp</span></Link></li>
            <li><Link href="/hospitals"><span className="hover:underline">Bệnh viện</span></Link></li>
            <li><Link href="/professional-teams"><span className="hover:underline">Đội ngũ chuyên môn</span></Link></li>
            <li><Link href="/community"><span className="hover:underline">Hoạt động xã hội</span></Link></li>
            <li><Link href="/job-news"><span className="hover:underline">Tin tức tuyển dụng</span></Link></li>
            <li><Link href="/event-news"><span className="hover:underline">Tin tức sự kiện</span></Link></li>
          </ul>
        </div>

        {/* Tổng đài */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold">TỔNG ĐÀI</h3>
          <ul className="space-y-2 mt-2">
            <li>Tư vấn mua hàng: <strong>18006928 (Nhánh 1)</strong></li>
            <li>Trung tâm Vắc xin: <strong>18006928 (Nhánh 2)</strong></li>
            <li>Góp ý, khiếu nại: <strong>18006928 (Nhánh 3)</strong></li>
          </ul>
        </div>

        {/* Kết nối */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Link href="https://www.facebook.com"><span className="hover:underline">Facebook</span></Link>
            </li>
            <li>
              <Link href="https://zalo.me"><span className="hover:underline">Zalo</span></Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer cuối */}
      <div className="bg-blue-500 text-white py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nhà thuốc Long Châu. All rights reserved.</p>
          <p>Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy-policy"><span className="hover:underline">Chính sách bảo mật</span></Link>
            <Link href="/terms"><span className="hover:underline">Điều khoản sử dụng</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
