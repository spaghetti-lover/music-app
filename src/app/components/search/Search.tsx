import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="mt-[20px] mb-[30px] bg-[#212121] rounded-[50px] py-[15px]">
      <form action="" className="relative">
        <FaMagnifyingGlass className="absolute ml-[20px] text-white top-[50%] left-[20px] transform translate-y-[-50%] text-[22px]" />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-[#212121] text-white w-[100%] pl-[72px] rounded-[50px] border-none outline-0"
        />
      </form>
    </div>
  );
};

export default Search;
