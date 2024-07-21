"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  let [songLists, setSongLists] = useState<ISongList[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSongList(10);
      setSongLists(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <SongList title={"Bài hát yêu thích"} songs={songLists} />
    </>
  );
}
