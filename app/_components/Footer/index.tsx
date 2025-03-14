import styles from "./index.module.css";
import Contact from "../Contact/index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact />
      <p className={styles.copyright}>© Horiuchi Miyu 2025</p>
    </footer>
  );
};

export default Footer;
