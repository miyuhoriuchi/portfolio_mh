import type React from "react";
import Link from "@/node_modules/next/link";
import styles from "./index.module.css";

interface ArticleCardProps {
  title: string;
  date: string;
  pagelink: string;
  imageurl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  pagelink,
  imageurl,
}) => {
  return (
    <Link href={pagelink} rel="noopener noreferrer" target="_blank">
      <div className={styles.card}>
        <img src={imageurl} alt="" className={styles.thumbnail} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
