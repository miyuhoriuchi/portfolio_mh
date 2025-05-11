import type React from "react";
import Image from "@/node_modules/next/image";
import type { MicroCMSImage } from "@/node_modules/microcms-js-sdk/dist/microcms-js-sdk";
import styles from "./index.module.css";

interface WorkCardProps {
  title: string;
  category: string;
  description?: string;
  eyecatch: MicroCMSImage;
  hero: MicroCMSImage;
  small: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  category,
  eyecatch,
  hero,
  small,
}) => {
  if (small) {
    return (
      <>
        <div className={`${styles.card} ${styles.smallcard}`}>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            className={styles.imageLarge}
            priority
          />
          <Image
            src={hero.url}
            alt=""
            width={hero.width}
            height={hero.height}
            className={styles.imageSmall}
            priority
          />
          <div className={styles.contentLarge}>
            <div
              className={`${styles.titleContainer} ${styles.smallTitleContainer}`}
            >
              <p className={`${styles.category} ${styles.smallCategory}`}>
                {category}
              </p>
              <h3 className={`${styles.title} ${styles.smallTitle}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.contentSmall}>
          <div
            className={`${styles.titleContainer} ${styles.smallTitleContainer}`}
          >
            <h3 className={`${styles.title} ${styles.smallTitle}`}>{title}</h3>
            <p className={`${styles.category} ${styles.smallCategory}`}>
              {category}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.card}>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            className={styles.imageLarge}
            priority
          />
          <Image
            src={hero.url}
            alt=""
            width={hero.width}
            height={hero.height}
            className={styles.imageSmall}
            priority
          />
          <div className={styles.contentLarge}>
            <div className={styles.titleContainer}>
              <p className={styles.category}>{category}</p>
              <h3 className={styles.title}>{title}</h3>
            </div>
          </div>
        </div>
        <div className={styles.contentSmall}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category}</p>
          </div>
        </div>
      </>
    );
  }
};

export default WorkCard;
