"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { useEffect, useState } from "react";

interface Section1Props {
  id: string;
}

export const Section1: React.FC<Section1Props> = ({ id }) => {
  const [songLists, setSongLists] = useState<ISongList[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const new_list = await getSongList();
      const new_data = new_list.filter((item) => item.categoryId == id);
      setSongLists(new_data);
    };
    fetchApi();
  }, [id]);
  return (
    <>
      <SongList title={"Bài hát cùng danh mục"} songs={songLists} />
    </>
  );
};
