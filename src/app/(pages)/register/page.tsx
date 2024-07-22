"use client";
import { Input } from "@/app/components/input/Input";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (username === "" || email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(db, "users/" + user.uid), {
            fullName: username,
          }).then(() => {
            router.push("/login");
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center register"
        onSubmit={handleSubmit}
      >
        <div className="font-bold text-[24px] text-center mb-[20px]">
          Đăng ký vào tài khoản
        </div>
        <Input
          label="Họ và tên"
          placeholder="Ví dụ: Lê Văn A"
          name="username"
        />
        <Input
          label="Email"
          placeholder="Ví dụ: levana@gmail.com"
          name="email"
        />
        <Input label="Mật khẩu" placeholder="" name="password" />
        <button
          type="submit"
          className="w-[500px] font-bold bg-primary rounded-[6px] py-[14px] pl-[16px]"
        >
          Đăng ký
        </button>
      </form>
    </>
  );
}
