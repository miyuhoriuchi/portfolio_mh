import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.portfolioText}>PORTFOLIO</p>
      <h1 className={styles.name}>HORIUCHI MIYU</h1>
      <nav className={styles.nav}>
        <a href="#works">WORKS</a>
        <a href="#articles">ARTICLES</a>
        <a href="#about">ABOUT ME</a>
      </nav>
    </header>
  );
};

export default Header;
