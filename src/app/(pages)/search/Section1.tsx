"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export const Section1 = () => {
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get("keyword") || "";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const regex = new RegExp(keywordDefault, "i");
      const res = await getSongList();
      const new_data = res.filter((item) => regex.test(item.title));
      console.log(new_data);
      setData(new_data);
    };
    fetchApi();
  }, [keywordDefault]);
  return (
    <>
      {/* render ra data */}
      <SongList title={"Ket qua tim kiem"} songs={data} />
    </>
  );
};
