"use client";
import styles from "./index.module.css";
import { Link as Scroll } from "react-scroll";
import { usePathname } from "@/node_modules/next/navigation";
import Link from "@/node_modules/next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <p className={styles.portfolioText}>PORTFOLIO</p>

      <Link href="/" className={styles.name}>
        HORIUCHI MIYU
      </Link>

      <nav className={styles.nav}>
        {pathname === "/" ? (
          <Scroll to="works" smooth={true} duration={600} offset={-30}>
            WORKS
          </Scroll>
        ) : (
          <Link href="/#works">WORKS</Link>
        )}

        {pathname === "/" ? (
          <Scroll to="articles" smooth={true} duration={600} offset={-30}>
            ARTICLES
          </Scroll>
        ) : (
          <Link href="/#articles">ARTICLES</Link>
        )}

        {pathname === "/" ? (
          <Scroll to="about" smooth={true} duration={600} offset={-30}>
            ABOUT
          </Scroll>
        ) : (
          <Link href="/#about">ABOUT</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
