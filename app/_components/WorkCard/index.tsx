import type React from "react";
import styles from "./index.module.css";

interface WorkCardProps {
  title: string;
  category: string;
  description?: string;
  small: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  category,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default WorkCard;
