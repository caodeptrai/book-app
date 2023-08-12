"use client";
import { Checkbox, Radio } from "antd";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" h-full  border-r px-2 bg-white">
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Danh mục sản phẩm</h2>
        <ul className="text-xs text-gray-700 font-normal">
          <li className="p-1 cursor-pointer hover:text-sky-400">
            English books
          </li>
          <li className="p-1 cursor-pointer hover:text-sky-400">
            Sách tiếng việt
          </li>
          <li className="p-1 cursor-pointer hover:text-sky-400">
            Văn phòng phẩm
          </li>
          <li className="p-1 cursor-pointer hover:text-sky-400">
            Qùa lưu niệm
          </li>
        </ul>
      </div>

      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Địa chỉ nhận hàng</h2>
        <span className="text-xs text-gray-700">Định hóa - Thái nguyên</span>
        <br />
        <a href="" className="text-xs text-sky-400 ">
          Đổi địa chỉ
        </a>
      </div>
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Đánh giá</h2>
        <div className="flex text-gray-400 text-xs gap-1 py-1 hover:opacity-80 cursor-pointer">
          <div>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
          </div>
          <span className="text-gray-800"> từ 5 sao</span>
        </div>
        <div className="flex text-gray-400 text-xs gap-1 py-1 hover:opacity-80 cursor-pointer">
          <div>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="text-gray-800"> từ 4 sao</span>
        </div>
        <div className="flex text-gray-400 text-xs gap-1 py-1 hover:opacity-80 cursor-pointer">
          <div>
            <span>
              <i className="fa-solid fa-star text-yellow-500 "></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <span className="text-gray-800"> từ 3 sao</span>
        </div>
      </div>
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Giá</h2>
      </div>
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Thương hiệu</h2>
        <div className="flex flex-col text-xs">
          <Checkbox>CHONMUA 365</Checkbox>
          <Checkbox>Deli</Checkbox>
          <Checkbox>Thiên Long</Checkbox>
          <Checkbox>KLONG</Checkbox>
          <Checkbox>Pentel</Checkbox>
        </div>
      </div>
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Nhà cung cấp</h2>
        <div className="flex flex-col text-xs">
          <Checkbox>Nhà sách Fahasa</Checkbox>
          <Checkbox>Times Books</Checkbox>
          <Checkbox>Bamboo Books</Checkbox>
          <Checkbox>Nhà sách trẻ Online</Checkbox>
          <Checkbox>Tiệm sách Hoa Hồng</Checkbox>
        </div>
      </div>
      <div className="py-3 border-b">
        <h2 className="font-medium text-sm">Giao hàng</h2>
        <div>
          <Radio.Group>
            <Radio value="Hàng nội địa">Hàng nội địa</Radio>
            <br></br>
            <Radio value="Hàng quốc tế">Hàng quốc tế</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
