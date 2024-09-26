// src/components/Header.tsx
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Import icon tìm kiếm và giỏ hàng

const Header = () => {
  return (
    <header className="bg-sky-600 shadow-md">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="https://cms-prod.s3-sgn09.fptcloud.com/smalls/Logo_LC_Default_2e36f42b6b.svg"
                alt="Nhà thuốc Long Châu"
                className="h-16"
              />
            </Link>
          </div>

          {/* Icons mạng xã hội */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.pinimg.com/736x/ee/28/3a/ee283a1348a90c6db74c2937493fce74.jpg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://vudigital.co/wp-content/uploads/2023/04/6-logo-instagram-va-nhung-lan-thay-doi-gay-tranh-cai.webp"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>

        {/* Thanh tìm kiếm và nút giỏ hàng */}
        <div className="mt-4 flex items-center">
          {/* Icon tìm kiếm trong thanh input */}
          <div className="relative flex-grow mx-4">
            <form>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute top-3 left-3 text-gray-400" /> {/* Icon tìm kiếm */}
            </form>
          </div>

          {/* Nút giỏ hàng */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative flex items-center">
              <FaShoppingCart className="text-3xl text-gray-600" /> {/* Tăng kích thước icon giỏ hàng */}
            
            </Link>
          </div>
        </div>

        {/* Menu điều hướng */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className="text-lg hover:text-blue-600">Trang chủ</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-blue-600">Giới thiệu</Link>
            </li>
            <li>
              <Link href="/contribute" className="text-lg hover:text-blue-600">Góp sức khỏe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
