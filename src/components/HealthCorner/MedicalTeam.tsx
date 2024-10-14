import React from 'react';
import Image from 'next/image'; // Import Image từ Next.js
import { ExpTeam } from '@/types/Article'; // Đảm bảo import đúng type

type MedicalTeamProps = {
  expTeam: ExpTeam[]; // Nhận dữ liệu expTeam từ props
};

const MedicalTeam: React.FC<MedicalTeamProps> = ({ expTeam }) => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-xs mx-auto"> {/* Bố cục responsive */}
      <h3 className="text-blue-600 font-bold text-lg text-center">Đội ngũ chuyên môn</h3>
      <ul className="mt-4 space-y-2">
        {expTeam.slice(0, 4).map(member => ( // Chỉ hiển thị 4 bác sĩ
          <li key={member.id} className="flex items-center space-x-3"> {/* Thêm space-x-3 để có khoảng cách giữa ảnh và thông tin */}
            {member.attributes.avatar?.data ? (
              <Image
                src={member.attributes.avatar.data.attributes.url}
                alt={member.attributes.fullName}
                width={64} // Thiết lập width cho hình ảnh
                height={64} // Thiết lập height cho hình ảnh
                className="rounded-full" // Sử dụng class để bo tròn hình
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-300"></div> // Hiển thị placeholder nếu không có avatar
            )}
            <div className="flex-1"> {/* Đảm bảo nội dung chiếm không gian còn lại */}
              <span className="block text-sm text-gray-700">{member.attributes.degree}</span>
              <span className="block font-bold text-gray-700">{member.attributes.fullName}</span>
              <span className="block text-sm text-gray-500">{member.attributes.specialty || 'Chưa có chuyên khoa'}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2 text-blue-600 font-semibold text-sm flex justify-center">
        <a href="#" className="hover:underline">
          Xem tất cả <span className="ml-1">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default MedicalTeam;
