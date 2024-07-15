import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Music app by FungDa",
  description:
    "A small music project app to demonstrate my coding ability in CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]  text-white`}>
        <div className="container mx-auto">
          <div className="flex items-start">
            <Sider />
            <div className="flex-1 ml-[300px] pt-[20px] pb-[30px]">
              <Search />
              <main className="mb-[123px]">{children}</main>
            </div>
          </div>
        </div>
        <div className="flex justify-between z-[999] bottom-0 w-full fixed bg-[#212121] py-[20px] px-[103px]">
          <div className="flex items-center">
            <img
              className="mr-[13px]"
              src="/images/hoquanghieu.png"
              width={49}
              height={49}
            ></img>
            <div>
              <h3 className="text-[15px] font-bold">Cô Phòng</h3>
              <p className="text-[12px] font-bold text-[#838383]">
                Hồ Quang Hiếu, Huỳnh Văn
              </p>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
