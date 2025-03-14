import Header from "./_components/Header/index";
import Footer from "./_components/Footer/index";
import type { Metadata } from "@/node_modules/next/types";
import "./globals.css";
import type React from "react";
import styles from "./layout.module.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <body className={inter.className}> */}
      <body>
        <Header />
        <div className={styles.container}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
