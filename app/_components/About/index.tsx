import styles from "./index.module.css";
import Image from "@/node_modules/next/image";
const About = () => {
  return (
    <div>
      <div className={styles.aboutContent}>
        <Image
          className={styles.profileImage}
          src="/profpic.png"
          alt=""
          width={200}
          height={200}
        />
        <div className={styles.profileText}>
          <h3 className={styles.profileName}>堀内 美佑</h3>
          <p className={styles.profileDescription}>
            大学卒業後、総合コンサルティング会社にてERPコンサルタント/エンジニアとして業務システム導入プロジェクトに4年間従事。ERPパッケージのカスタム機能の設計・開発やテストを中心に経験する。
            退職後は「よりユーザーに近い場所でものづくりをしたい」という想いでUI/UXデザイナーを目指して勉強中。学部時代は農業経済学を専攻。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
