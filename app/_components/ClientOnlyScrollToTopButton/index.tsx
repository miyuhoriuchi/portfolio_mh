"use client";

import { useState, useEffect } from "react";
import ScrollToTopButton from "../ScrollToTopButton/index";

// このコンポーネントはクライアントサイドでのみ実行される
export default function ClientOnlyScrollToTop() {
  // クライアントサイドでのマウント状態を追跡
  const [isMounted, setIsMounted] = useState(false);

  // マウント時にのみ実行
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // サーバーサイドレンダリング時は何も表示しない
  if (!isMounted) {
    return null;
  }

  // クライアントサイドでのみ実際のコンポーネントを表示
  return <ScrollToTopButton />;
}
