import { onValue, ref } from "firebase/database";
import { db } from "../firebaseConfig";

export const getSingerList = async () => {
  const singerRef = ref(db, "singers");
  const result: any[] = await new Promise((resolve, reject) => {
    let dataList: any[] = [];
    onValue(
      singerRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const childData = childSnapshot.val();
          dataList.push({
            id: key,
            link: `/singers/${key}`,
            ...childData,
          });
        });
        resolve(dataList);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return result;
};

export const getSingerDetail = async (stringId: string) => {
  const singerRef = ref(db, `singers/${stringId}`);
  const result: any[] = await new Promise((resolve, reject) => {
    onValue(
      singerRef,
      (snapshot) => {
        resolve(snapshot.val());
      },
      (error) => {
        reject(error);
      }
    );
  });
  return result;
};
