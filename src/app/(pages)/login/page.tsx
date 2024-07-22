"use client";
import { Input } from "@/app/components/input/Input";
import { db, auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/");
        })
        .catch((error) => {
          alert("Sai tài khoản hoặc mật khẩu");
        });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="font-bold text-[24px] text-center mb-[20px]">
          Đăng nhập vào tài khoản
        </div>
        <Input
          label="Email"
          placeholder="Ví dụ: levana@gmail.com"
          name="email"
        />
        <Input label="Mật khẩu" placeholder="" name="password" />
        <button className="w-[500px] font-bold bg-primary rounded-[6px] py-[14px] pl-[16px]">
          Đăng nhập
        </button>
      </form>
    </>
  );
}
