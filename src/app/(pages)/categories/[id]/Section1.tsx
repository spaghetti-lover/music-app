"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Section1 = () => {
  const id = usePathname().slice(-1);
  let [songAccordingToCategory, setSongAccordingToCategory] = useState<
    ISongList[]
  >([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSongList();
      setSongAccordingToCategory(data.filter((song) => song.categoryId === id));
    };
    fetchApi();
  });
  return (
    <>
      <SongList title="Danh Sách Bài Hát" songs={songAccordingToCategory} />
    </>
  );
};
