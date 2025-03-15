import type React from "react";
import Image from "@/node_modules/next/image";
import type { MicroCMSImage } from "@/node_modules/microcms-js-sdk/dist/microcms-js-sdk";
import styles from "./index.module.css";

interface WorkCardProps {
  title: string;
  category: string;
  description?: string;
  eyecatch: MicroCMSImage;
  small: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  category,
  description,
  eyecatch,
  small,
}) => {
  if (small) {
    return (
      <div className={`${styles.card} ${styles.smallcard}`}>
        <Image
          src={eyecatch.url}
          alt=""
          width={eyecatch.width}
          height={eyecatch.height}
          className={styles.image}
          priority
        />
        <div className={styles.content}>
          <div
            className={`${styles.titleContainer} ${styles.smallTitleContainer}`}
          >
            <h3 className={`${styles.title} ${styles.smallTitle}`}>{title}</h3>
            <p className={`${styles.category} ${styles.smallCategory}`}>
              {category}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <Image
          src={eyecatch.url}
          alt=""
          width={eyecatch.width}
          height={eyecatch.height}
          className={styles.image}
          priority
        />
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category}</p>
          </div>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    );
  }
};

export default WorkCard;
