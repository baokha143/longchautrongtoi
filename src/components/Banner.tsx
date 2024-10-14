import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
const Banner = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "#3182CE" : "#CBD5E0",
          margin: "0 4px",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dots}
      </div>
    ),
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="bg-white py-8 w-full">
      <div className="w-[80%] mx-auto">
        {/* Bố cục carousel (1 chính) và 2 hình ảnh (phụ) bên phải */}
        <div className="omd:container-lite relative md:flex md:flex-row md:gap-3 md:py-4">
          {" "}
          {/* Thay đổi cấu trúc đây */}
          {/* Carousel bên trái với viền bo tròn */}
          <div className="relative w-full md:w-2/3 overflow-hidden rounded-lg bg-red-500 max-w-[805px]">
            {" "}
            {/* Thay đổi chiều rộng để phù hợp với layout */}
            <Slider  ref={sliderRef} {...settings } className="">
              <div>
                <Image
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_banner_web_100_2506798a91.jpg"
                  alt="Banner 1"
                  width={850}
                  height={246}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Otosan_Homapage_PC_1610x492_b24545cbdf.jpg"
                  alt="Banner 2"
                  width={805}
                  height={246}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Vacxin_Viemnao_bannerweb_Homepage_Web_1610x492_34ba60a578.jpg"
                  alt="Banner 3"
                  width={805}
                  height={246}
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
           {/* Nút bấm điều hướng trái và phải */}
<button
  onClick={handlePrev}
  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
  style={{ zIndex: 1 }}
>
  <ChevronLeftIcon className="h-6 w-6" />
</button>
<button
  onClick={handleNext}
  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
  style={{ zIndex: 1 }}
>
  <ChevronRightIcon className="h-6 w-6" />
</button>
          </div>
          {/* Hai hình ảnh bên phải */}
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            {" "}
            {/* Đảm bảo cột bên phải chiếm một cột */}
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <Image
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/399x117_49d70d4809_1dbe50dd49.png"
                alt="Hình ảnh 1"
                width={399}
                height={117}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <Image
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/2_5a1afe845d.png"
                alt="Hình ảnh 2"
                width={399}
                height={117}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bốn div ở dưới với icon bên trái và chữ bên phải */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/canmuathuoc_29bf521996.png"
              alt="Icon 1"
              width={24}
              height={24}
              className="h-8 w-8 mr-3"
            />
            <div>
              <p className="text-base text-gray-600">Cần Mua Thuốc</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tuvanvoiduocsi_1855320b40.png"
              alt="Icon 2"
              width={24}
              height={24}
              className="h-8 w-8 mr-3"
            />
            <div>
              <p className="text-base text-gray-600">Tư Vấn Với Dược Sĩ</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/timnhathuoc_cbadb52c85.png"
              alt="Icon 3"
              width={24}
              height={24}
              className="h-8 w-8 mr-3"
            />
            <div>
              <p className="text-base text-gray-600">Tìm Nhà Thuốc</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/doncuatoi_5058ac6058.png"
              alt="Icon 4"
              width={24}
              height={24}
              className="h-8 w-8 mr-3"
            />
            <div>
              <p className="text-base text-gray-600">Đơn Của tôi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
