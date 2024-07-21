"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  const router = useRouter();

  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let input = event.target as HTMLFormElement;
    input = input.keyword.value;
    if (input) {
      router.push(`/search?keyword=${input}`);
    }
  };
  return (
    <div className="w-full mt-[20px] mb-[30px] bg-[#212121] rounded-[50px] py-[15px]">
      <form onSubmit={searchSubmit} className="relative">
        <FaMagnifyingGlass className="absolute ml-[20px] text-white top-[50%] left-[20px] transform translate-y-[-50%] text-[22px]" />
        <input
          name="keyword"
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-[#212121] text-white w-[100%] pl-[72px] rounded-[50px] border-none outline-none"
        />
      </form>
    </div>
  );
};

export default Search;
