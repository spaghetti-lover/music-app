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
  const id = song.id;

  const handleAddWishlist = () => {
    const userId = auth?.currentUser?.uid;

    if (id && userId) {
      const songRef = ref(db, `/songs/${id}`);
      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            song.wishlist[userId] = null;
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
          }
        }
        return song;
      });
    }
  };
  return (
    <>
      <button onClick={handleAddWishlist} className={className}>
        <FaHeart />
      </button>
    </>
  );
};
