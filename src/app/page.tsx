import Book from "@/components/book/Book";
import Filter from "@/components/filter/Filter";
import Sidebar from "@/components/sidebar/Sidebar";

import Silde from "@/components/slide/Slide";
import { Pagination } from "antd";
export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-3 container mx-xl mx-auto">
      <aside className="col-span-1">
        <Sidebar />
      </aside>
      <div className="col-span-5 bg-white">
        <div className="px-3 border-b mt-3">
          <Silde />
          <Filter />
        </div>

        <div className="grid grid-cols-5 gap-2 bg-[#f5f5fa]">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
        <div className="text-center my-[16px]">
          <Pagination defaultCurrent={1} total={200} />
        </div>
      </div>
    </div>
  );
}
