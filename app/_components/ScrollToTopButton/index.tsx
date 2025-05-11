"use client";
import styles from "./index.module.css";
import Image from "@/node_modules/next/image";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // 初期スクロール位置をチェック
    handleScroll();

    // スクロールイベントのリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // コンポーネントのアンマウント時にリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ページトップにスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ボタンが表示状態でない場合は何も表示しない
  if (!showButton) return null;

  return (
    <button
      className={styles.scrollToTopButton}
      onClick={scrollToTop}
      aria-label="ページトップに戻る"
    >
      <Image
        className={styles.allow}
        src="/return.svg"
        alt=""
        width={36}
        height={36}
      ></Image>
    </button>
  );
}
