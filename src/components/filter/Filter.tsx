import React from "react";
import { Pagination } from "antd";
const Filter = () => {
  return (
    <div className="flex justify-between mt-3 pb-3">
      <ul className="flex gap-10 text-sm">
        <li className="hover:text-sky-500 cursor-pointer group">
          Phổ biến
          <hr className="w-14 mx-auto  h-1.5 bg-sky-500 rounded opacity-0 group-hover:opacity-100" />
        </li>
        <li className="hover:text-sky-500 cursor-pointer group">
          Bán chạy
          <hr className="w-14 mx-auto  h-1.5 bg-sky-500 rounded opacity-0 group-hover:opacity-100" />
        </li>
        <li className="hover:text-sky-500 cursor-pointer group">
          Hàng mới
          <hr className="w-14 mx-auto  h-1.5 bg-sky-500 rounded opacity-0 group-hover:opacity-100" />
        </li>
        <li className="hover:text-sky-500 cursor-pointer group">
          Giá thấp đến cao
          <hr className="w-14 mx-auto  h-1.5 bg-sky-500 rounded opacity-0 group-hover:opacity-100" />
        </li>
        <li className="hover:text-sky-500 cursor-pointer group">
          Giá cao đến thấp
          <hr className="w-14 mx-auto h-1.5 bg-sky-500 rounded opacity-0 group-hover:opacity-100" />
        </li>
      </ul>

      <div>
        <Pagination simple defaultCurrent={2} total={200} />
      </div>
    </div>
  );
};

export default Filter;
