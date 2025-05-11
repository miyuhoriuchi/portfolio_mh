import styles from "./index.module.css";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContent}>
        <Image
          className={styles.profileImage}
          src="/profpic.png"
          alt=""
          width={160}
          height={160}
        />
        <div className={styles.profileText}>
          <h3 className={styles.profileName}>堀内 美佑</h3>
          <p className={styles.profileTitle}>Aspiring UI/UX Designer</p>
          <p className={styles.profileDescription}>
            大学卒業後、総合コンサルティング会社にてERPコンサルタント/エンジニアとして業務システム導入プロジェクトに4年間従事。ERPパッケージのカスタム機能の設計・開発やテストを中心に経験する。
            <br />
            「よりユーザーに近い場所でものづくりをしたい」という想いで退職し、オンラインコミュニティ
            <Link
              href="https://www.bo-no.design/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              BONO
            </Link>
            に参加しながらUI/UXデザインを勉強中。コンサルタント・エンジニア経験を活かし、ビジネス価値と技術的実現性の両面からデザインを最適化できるようなデザイナーを目指している。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
