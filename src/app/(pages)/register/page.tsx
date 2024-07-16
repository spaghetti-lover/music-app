import { Input } from "@/app/components/input/Input";

export default function RegisterPage() {
  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <div className="font-bold text-[24px] text-center mb-[20px]">
          Đăng ký vào tài khoản
        </div>
        <Input
          label="Họ và tên"
          placeholder="Ví dụ: Lê Văn a"
          name="username"
        />
        <Input
          label="Email"
          placeholder="Ví dụ: levana@gmail.com"
          name="password"
        />
        <Input label="Mật khẩu" placeholder="" name="password" />
        <button className="w-[500px] font-bold bg-primary rounded-[6px] py-[14px] pl-[16px]">
          Đăng ký
        </button>
      </form>
    </>
  );
}
