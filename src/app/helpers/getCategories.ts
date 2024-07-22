import { onValue, ref } from "firebase/database";
import { db } from "../firebaseConfig";
import { Card } from "../interfaces/card/Card";

export const getCategoryList = async (max?: number) => {
  const categoryList = ref(db, "categories");

  const result = await new Promise<Card[]>((resolve) => {
    let list: any[] = [];
    onValue(categoryList, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const temp_data = childSnapshot.val();

        list.push({
          id: key,
          link: `/categories/${key}`,
          ...temp_data,
        });
      });
      if (max) {
        list = list.splice(0, max);
      }
      resolve(list);
    });
  });
  return result;
};

export const getCategoryDetail = async (id: string) => {
  const category = ref(db, `categories/${id}`);

  const result = await new Promise<Card>((resolve) => {
    onValue(category, (snapshot) => {
      const key = snapshot.key;
      const temp_data = snapshot.val();

      resolve({
        id: key,
        link: `/categories/${key}`,
        ...temp_data,
      });
    });
  });
  return result;
};
