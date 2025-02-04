"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { useEffect, useState } from "react";

// Define the props type for better type checking
interface Section1Props {
  id: string;
}

export const Section1: React.FC<Section1Props> = ({ id }) => {
  let [songLists, setSongLists] = useState<any[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data: any[] = await getSongList();
      const new_data: any[] = data.filter((item: any) =>
        item.singerId.includes(id)
      );
      setSongLists(new_data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <SongList title={"Danh sách bài hát"} songs={songLists} />
    </>
  );
};
