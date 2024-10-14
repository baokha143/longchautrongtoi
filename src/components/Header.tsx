import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header chứa logo, thanh tìm kiếm và giỏ hàng */}
      <header className="h-full md:relative md:h-auto shadow-md bg-blue-500" style={{ color: 'white' }}>
        <div className="container mx-auto p-4">
          {/* Bố cục cho logo, thanh tìm kiếm và giỏ hàng */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0 md:mr-4">
              <Link href="/">
                <Image
                  src="https://cms-prod.s3-sgn09.fptcloud.com/smalls/Logo_LC_Default_2e36f42b6b.svg"
                  alt="Nhà thuốc Long Châu"
                  width={160} // Chiều rộng của logo
                  height={64} // Chiều cao của logo
                  className="w-auto h-auto"
                />
              </Link>
            </div>

            {/* Thanh tìm kiếm */}
            <div className="relative w-full md:w-80 mx-4">
              <form>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
                <FaSearch className="absolute top-3 left-3 text-gray-400" />
              </form>
            </div>

            {/* Nút giỏ hàng */}
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/cart" className="relative flex items-center">
                <FaShoppingCart className="text-3xl text-white" />
                <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>

            {/* Hamburger menu cho mobile */}
            <div className="md:hidden ml-4">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu điều hướng */}
      <nav className={`bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto py-2">
          <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
            <li>
              <Link href="/" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link href="/contribute" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Góp sức khỏe
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Chăm sóc cá nhân
              </Link>
            </li>
            <li>
              <Link href="/contribute" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Dược Mỹ Phẩm
              </Link>
            </li>
            <li>
              <Link href="/contribute" className="text-lg text-gray-600 hover:text-blue-300 transition duration-200">
                Thực Phẩm Chức Năng
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
