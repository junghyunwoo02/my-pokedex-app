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
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-[white] text-center pt-[1rem]">
          <h2 className="font-bold text-2xl">나만의 포켓몬 도감!</h2>
        </header>
        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
