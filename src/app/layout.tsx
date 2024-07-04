import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "포켓몬 리스트를 보여주는 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f0f0f0]`}>
        <header className="w-full h-[60px] bg-[#6081d6] text-[#ede6e6] text-center pt-[1rem]">
          <h2 className="font-bold text-2xl">나만의 포켓몬 도감!</h2>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
