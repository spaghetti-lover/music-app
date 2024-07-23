"use client";

import { ISongList } from "@/app/interfaces/song/ISongList";
import { FaHeart } from "react-icons/fa";
import { auth, db } from "@/app/firebaseConfig";
import { ref, runTransaction, set } from "firebase/database";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const ButtonHeart = ({
  song,
  className,
}: {
  song: ISongList;
  className: string;
}) => {
  let [isLiked, setIsLiked] = useState(false);
  const id = song.id;
  const userId: any = auth.currentUser?.uid;
  const songRef = ref(db, `/songs/${id}`);
  const handleButton = () => {
    runTransaction(songRef, (song) => {
      if (song) {
        if (song.wishlist && song.wishlist[userId]) {
          song.wishlist[userId] = null;
        } else {
          if (!song.wishlist) {
            song.wishlist = [];
          }
          song.wishlist[userId] = true;
        }
      }
      return song;
    });
  };
  useEffect(() => {
    if (song.wishlist && song.wishlist[userId]) {
      setIsLiked(true);
    }
  }, []);
  return (
    <>
      <button
        onClick={handleButton}
        className={
          `${className}` + (isLiked ? "text-primary border-primary" : "")
        }
      >
        <FaHeart />
      </button>
    </>
  );
};
