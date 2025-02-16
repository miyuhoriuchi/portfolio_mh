import Header from "./_components/Header/index";
import type { Metadata } from "@/node_modules/next/types";
// import { Inter } from "@/node_modules/next/font/google"
import "./globals.css";
import type React from "react";
import styles from "./layout.module.css";

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HORIUCHI MIYU",
  description: "堀内美佑のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* <body className={inter.className}> */}
      <body>
        <Header />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
