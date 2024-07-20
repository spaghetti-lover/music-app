"use client";
import {
  equalTo,
  orderByChild,
  query,
  ref,
  get,
  onValue,
} from "firebase/database";
import { db } from "../firebaseConfig";

export const getSongList = async () => {
  const songRef = ref(db, "songs");
  const result: any[] = await new Promise((resolve) => {
    let data: any[] = [];
    onValue(songRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const temp_data = childSnapshot.val();

        data.push({
          id: key,
          link: `/song/${key}`,
          ...temp_data,
        });
      });
      resolve(data);
    });
  });
  return result;
};

export const getSongDetail = async (id: string) => {
  const songRef = ref(db, `songs/${id}`);
  const result = await new Promise((resolve) => {
    const temp = onValue(songRef, (snapshot) => {
      resolve(snapshot.val());
    });
    return temp;
  });
  return result;
};
