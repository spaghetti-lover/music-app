import { onValue, ref } from "firebase/database";
import { db } from "../firebaseConfig";

export const getCategoryList = async () => {
  const categoryRef = ref(db, "categories");
  const result: any[] = await new Promise((resolve) => {
    let data: any[] = [];
    onValue(categoryRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const temp_data = childSnapshot.val();
        data.push({
          id: key,
          link: `/category/${key}`,
          ...temp_data,
        });
      });
      resolve(data);
    });
  });
};
