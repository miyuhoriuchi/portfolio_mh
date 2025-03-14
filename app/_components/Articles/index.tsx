"use client";
import { useEffect, useState } from "react";
import Link from "@/node_modules/next/link";
import ArticleCard from "../ArticleCard/index";
import styles from "./index.module.css";
import { NoteArticle } from "@/app/_libs/note";

const Articles = () => {
  const [articles, setArticles] = useState<NoteArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/note");
        const data: NoteArticle[] = await res.json();
        setArticles(data);
        console.log("Fetched articles:", data); // コンソールに表示
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articlesGrid}>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              date={new Date(article.date).toLocaleDateString()}
              pagelink={article.link}
              imageurl={article.thumbnail}
            />
          ))
        ) : (
          <p>記事が見つかりませんでした。</p>
        )}
      </div>
      <Link
        href="https://note.com/miyu_003d26"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.moreLink}
      >
        記事をもっと見る
      </Link>
    </div>
  );
};

export default Articles;
