"use client";
import { auth } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function LogOutPage() {
  const router = useRouter();
  signOut(auth)
    .then(() => {
      alert("Sign out success");
      router.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <div className="flex items-center justify-center">
        <h1>Loging Out...</h1>
      </div>
    </>
  );
}
