import Image from "@/node_modules/next/image";
import styles from "./index.module.css";

const FirstView = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/profpic.png"
        alt=""
        width={64}
        height={64}
        className={styles.profpic}
      ></Image>
      <p>
        システムエンジニアからUI/UXデザイナーを目指す、堀内美佑のポートフォリオサイトです。
      </p>
    </div>
  );
};

export default FirstView;
