"use client";
import type React from "react";
import { Children } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "@/node_modules/next/navigation";
import styles from "./index.module.css";

interface SectionProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, subTitle, children, id }) => {
  const pathname = usePathname();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isPageLoaded && typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, isPageLoaded]);

  return (
    <section className={styles.section} id={id}>
      <h2 className={styles.sectionTitle}>
        {title} <span className={styles.sectionSubtitle}>{subTitle}</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
