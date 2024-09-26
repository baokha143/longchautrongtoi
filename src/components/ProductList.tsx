import { useState } from 'react';
import { Product } from '@/types/Product'; 
import Image from 'next/image';

const ProductList = () => {
  const staticProducts: Product[] = [
    {
      id: 1, 
      name: 'Sữa rửa mặt Reihaku Hatomugi Acne Care and Facial Washing ngừa mụn, dưỡng ẩm và làm sáng da (130g)', 
      unitPrice: '1.200đ / viên', 
      packaging: 'Hộp 2 vỉ x 10 viên', 
      imageUrl: 'https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00503325_sua_rua_mat_ngua_mun_duong_am_va_lam_sang_da_reihaku_hatomugi_acne_care_and_facial_washing_130g_9270_63ed_large_3f5868bde7.jpg' 
    },
    // ... các sản phẩm khác
  ];

  const [products] = useState<Product[]>(staticProducts);
  const [selectedUnits, setSelectedUnits] = useState<string[]>(Array(staticProducts.length).fill('hộp'));

  const handleUnitChange = (index: number, unit: string) => {
    const newUnits = [...selectedUnits];
    newUnits[index] = unit;
    setSelectedUnits(newUnits);
  };

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-xl font-bold text-black text-center mb-6">Sản Phẩm Bán Chạy</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"> {/* Giảm khoảng cách giữa các sản phẩm */} 
        {products.length > 0 ? (
          products.map((product, index) => (
            <div 
              key={product.id} 
              className="border rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              style={{ maxWidth: '200px' }} 
            >
              <Image 
                src={product.imageUrl || ''} 
                alt={product.name} 
                className="w-full h-36 object-contain" 
                width={150}
                height={150}
              />
              <div className="p-1"> {/* Giảm padding */}
                <h3 className="text-base font-semibold text-black overflow-hidden line-clamp-3">{product.name}</h3> {/* Giảm kích thước chữ */}

                {/* Lựa chọn theo Hộp / Vĩ / Viên */}
                <div className="mt-1 flex space-x-1"> {/* Giảm khoảng cách giữa các nút */}
                  <button 
                    className={`py-1 px-2 rounded-lg border ${selectedUnits[index] === 'hộp' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-black'}`}
                    onClick={() => handleUnitChange(index, 'hộp')}
                  >
                    Hộp
                  </button>
                  <button 
                    className={`py-1 px-2 rounded-lg border ${selectedUnits[index] === 'vĩ' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-black'}`}
                    onClick={() => handleUnitChange(index, 'vĩ')}
                  >
                    Vĩ
                  </button>
                  <button 
                    className={`py-1 px-2 rounded-lg border ${selectedUnits[index] === 'viên' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-black'}`}
                    onClick={() => handleUnitChange(index, 'viên')}
                  >
                    Viên
                  </button>
                </div>

                {/* Giá theo đơn vị */}
                <p className="text-sm text-blue-600 mt-1">{product.unitPrice}</p>

                {/* Quy cách đóng gói */}
                <p className="text-xs text-gray-500 border border-blue-300 rounded-lg p-1 mt-1">Quy cách: {product.packaging}</p> {/* Giảm kích thước chữ và padding */}

                {/* Nút thêm vào giỏ */}
                <div className="flex justify-center mt-1">
                  <button className="bg-blue-700 text-white py-1 px-3 rounded-lg hover:bg-blue-800"> {/* Giảm kích thước nút */}
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="py-2">Không có sản phẩm nào</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
