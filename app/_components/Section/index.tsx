import type React from "react";
import { Children } from "react";
import styles from "./index.module.css";

interface SectionProps {
  title: string;
  subTitle: string;
  isContact: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  subTitle,
  isContact,
  children,
}) => {
  if (isContact) {
    return (
      <section className={`${styles.section} ${styles.contactSection}`}>
        <h2 className={styles.sectionTitle}>
          {title} <span className={styles.sectionSubtitle}>{subTitle}</span>
        </h2>
        {children}
      </section>
    );
  } else {
    return (
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          {title} <span className={styles.sectionSubtitle}>{subTitle}</span>
        </h2>
        {children}
      </section>
    );
  }
};

export default Section;
