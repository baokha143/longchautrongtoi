// src/components/Banner.tsx
import React from 'react';
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto">
        {/* Bố cục carousel và 2 hình ảnh bên phải */}
        <div className="grid grid-cols-3 gap-4">
          {/* Carousel bên trái với viền bo tròn */}
          <div className="col-span-2 relative overflow-hidden rounded-lg shadow-lg">
            <Slider {...settings}>
              <div>
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_banner_web_100_2506798a91.jpg"
                  alt="Banner 1"
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div>
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Otosan_Homapage_PC_1610x492_b24545cbdf.jpg"
                  alt="Banner 2"
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div>
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Vacxin_Viemnao_bannerweb_Homepage_Web_1610x492_34ba60a578.jpg"
                  alt="Banner 3"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </Slider>
          </div>

          {/* Hai hình ảnh bên phải */}
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/399x117_49d70d4809_1dbe50dd49.png"
                alt="Hình ảnh 1"
                className="w-full h-[160px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/2_5a1afe845d.png"
                alt="Hình ảnh 2"
                className="w-full h-[160px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bốn div ở dưới với icon bên trái và chữ bên phải */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-100 p-2 rounded-lg shadow-md flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972548.png"
              alt="Icon 1"
              className="h-6 w-6 mr-2"
            />
            <div>
              <p className="text-sm text-gray-600">Cần Mua Thuốc</p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg shadow-md flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/148/148781.png"
              alt="Icon 2"
              className="h-6 w-6 mr-2"
            />
            <div>
              <p className="text-sm text-gray-600">Tư Vấn Với Dược Sĩ</p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg shadow-md flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1306/1306639.png"
              alt="Icon 3"
              className="h-6 w-6 mr-2"
            />
            <div>
              <p className="text-sm text-gray-600">Tìm Nhà Thuốc</p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg shadow-md flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/841/841435.png"
              alt="Icon 4"
              className="h-6 w-6 mr-2"
            />
            <div>
              <p className="text-sm text-gray-600">Đơn Của tôi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
