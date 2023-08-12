import Image from "next/image";
import React from "react";
import bookImg from "/public/book1.webp";
const Book = () => {
  return (
    <div className="mt-2 bg-white p-3 rounded-lg cursor-pointer hover:border hover:border-sky-500">
      <div className="w-full">
        <Image src={bookImg} alt="ảnh sản phẩm" className="object-cover" />
      </div>
      <h3 className="text-xs py-3">
        Kế Toán Vỉa Hè - Thực Hành Báo Cáo Tài Chính Căn Bản Từ Quầy Bán Nước
        Chanh
      </h3>
      <div className="flex items-center gap-1">
        <div className="text-[10px]">
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
        </div>
        <hr className="h-4 w-px bg-gray-300" />
        <span className="text-[10px]">Đã bán 4.6k</span>
      </div>
      <div className="flex gap-2 items-center">
        <span>179.000đ</span>
        <span className="text-xs">-10%</span>
      </div>
    </div>
  );
};

export default Book;
