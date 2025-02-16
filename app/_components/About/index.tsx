import styles from "./index.module.css";

const About = () => {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.aboutContent}>
        <div className={styles.profileImage} />
        <div className={styles.profileText}>
          <h3 className={styles.profileName}>堀内 美佑</h3>
          <p className={styles.profileDescription}>
            東京大学農学部を卒業後、アクセンチュア株式会社にてERPコンサルタント/エンジニアとして業務システム導入プロジェクトに4年間従事。ERPアドオンプログラムの設計・開発やテストを中心に経験する。
            退職後は「よりユーザーに近い場所でものづくりをしたい」という想いでUI/UXデザイナーを目指して勉強中。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
