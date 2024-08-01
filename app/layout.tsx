import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { themeColor } from "@/styles/color";
import RootRouter from "@/components/router/Router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "떡치트",
  description: "사기 조회 송금 서비스",
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
          <div className="w-full h-28 flex justify-center" style={{backgroundColor: themeColor}}>
            <RootRouter />
          </div>
          {children}
          </div>
        </body>
    </html>
  );
}
