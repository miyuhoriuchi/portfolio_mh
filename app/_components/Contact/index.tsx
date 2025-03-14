import styles from "./index.module.css";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

const Contact = () => {
  return (
    <div className={styles.contactBlock}>
      <div className={styles.socialLinks}>
        <Link
          href="https://x.com/home"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/icon_x.svg" alt="" width={32} height={32} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/miyu-horiuchi-4a00a7170/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/icon_in.svg" alt="" width={32} height={32} />
        </Link>
        <Link
          href="https://github.com/miyuhoriuchi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/icon_git.svg" alt="" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
