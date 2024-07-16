import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebaseConfig";

export const getSongList = async (max?: number, categoryId?: string) => {
  const songRef = ref(db, "songs");
  let songQuery: any;
  songQuery = songRef;
  console.log(songQuery);
  return [];
};
