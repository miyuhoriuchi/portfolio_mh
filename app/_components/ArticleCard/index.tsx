import type React from "react";
import styles from "./index.module.css";

interface ArticleCardProps {
  title: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>解像度を上げる</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
