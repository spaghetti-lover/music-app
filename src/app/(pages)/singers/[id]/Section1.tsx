"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { useEffect, useState } from "react";

export const Section1 = ({ id }: { id: string }) => {
  let [songLists, setSongLists] = useState<any[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data: any[] = await getSongList();

      const new_data: any[] = data.filter((item: any) =>
        item.singerId.includes(id)
      );
      console.log(new_data);
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
