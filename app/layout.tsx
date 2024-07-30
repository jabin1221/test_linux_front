import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftDrawer from "@/components/drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "송금하기",
  description: "송금하는 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="w-full h-32 bg-indigo-400"></div>
          {children}
          </div>
        </body>
    </html>
  );
}
