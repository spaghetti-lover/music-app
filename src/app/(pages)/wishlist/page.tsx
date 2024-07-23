"use client";
import { SongList } from "@/app/components/song/SongList";
import { auth } from "@/app/firebaseConfig";
import { getSongList } from "@/app/helpers/getSong";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  let [songLists, setSongLists] = useState<ISongList[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSongList(10);
      const userId = auth.currentUser?.uid;
      if (userId) {
        let filteredData = data.filter((song) => song.wishlist);
        filteredData = filteredData.filter((song) => song.wishlist[userId]);
        setSongLists(filteredData);
      } else {
        setSongLists([]);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <SongList title={"Bài hát yêu thích"} songs={songLists} />
    </>
  );
}
