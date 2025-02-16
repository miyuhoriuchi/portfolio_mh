import styles from "./index.module.css";

const Contact = () => {
  return (
    <>
      <p className={styles.email}>miyuhoriuchi721@gmail.com</p>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink}>
          {/* <Image /> */}
        </a>
        <a href="#" className={styles.socialLink}>
          in
        </a>
        <a href="#" className={styles.socialLink}>
          Git
        </a>
      </div>
      <p className={styles.copyright}>© Horiuchi Miyu 2025</p>
    </>
  );
};

export default Contact;
