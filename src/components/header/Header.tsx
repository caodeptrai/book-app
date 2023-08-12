import Image from "next/image";
import React from "react";
import Logo from "/public/logo.png";

import { Popover } from "antd";
import Notication from "../notication/Notication";
import Cart from "../cart/Cart";

const content = (
  <div>
    <span>Tài khoản</span>
    <br />
    <span>Đăng xuất</span>
  </div>
);

const Header = () => {
  return (
    <div className="w-full border-b bg-white">
      <div className="container mx-xl h-24 bg-white flex justify-between items-center px-2 mx-auto my-0">
        <Image src={Logo} alt="logo" width={48} height={48} />

        <div className="w-2/5 h-10 relative border rounded-lg flex items-center pl-2 focus-within:border-sky-500">
          <span className="absolute left-2 text-sm text-gray-600">
            {" "}
            <i className="fa-solid fa-magnifying-glass "></i>
          </span>

          <input
            type="text"
            className="h-full flex-1 outline-none pl-5 text-sm "
            placeholder=" Bạn tìm gì hôm nay?"
          />
          <hr className="h-7 w-px bg-gray-300" />
          <button className="text-sm text-sky-400 p-1 font-medium hover:bg-sky-500 hover:text-white h-full pr-2 hover:rounded-r-lg">
            Tìm kiếm
          </button>
        </div>
        <ul className="flex justify-between items-center ">
          <li className="text-gray-700 p-2.5 hover:bg-zinc-200 hover:rounded-lg cursor-pointer">
            <Notication />
          </li>
          <li className="text-gray-700 p-2.5 hover:bg-zinc-200 hover:rounded-lg cursor-pointer">
            <Cart />
          </li>
          <li className="text-gray-700 p-2.5 text-sm hover:bg-zinc-200 hover:rounded-lg cursor-pointer">
            <span className="text-gray-500 mr-1">
              <i className="fa-solid fa-globe"></i>
            </span>
            <select name="cars" id="cars" className="bg-transparent ">
              <option value="Tiếng việt">Tiếng việt</option>
              <option value="English">English</option>
            </select>
          </li>
          <li className="text-gray-700 text-sm p-3 hover:bg-zinc-200 hover:rounded-lg cursor-pointer">
            <Popover content={content} title="Tùy chọn" trigger="click">
              <span className="text-gray-500 mr-1">
                <i className="fa-solid fa-user"></i>
              </span>
              duongcao123
            </Popover>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
