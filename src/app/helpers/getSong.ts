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
          link: `/songs/${key}`,
          ...temp_data,
        });
      });
      resolve(data);
    });
  });
  return result;
};
