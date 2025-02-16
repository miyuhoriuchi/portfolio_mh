import ArticleCard from "../ArticleCard/index";
import styles from "./index.module.css";

const Articles = () => {
  return (
    <div className={styles.articlesGrid}>
      <ArticleCard
        title="学習記録｜モダンなWebフロントエンドに入門する"
        date="2025年2月10日"
      />
      <ArticleCard
        title="読書記録｜『具体⇄抽象トレーニング』 細谷功 著"
        date="2025年1月29日"
      />
      <ArticleCard
        title="読書記録｜『解像度を上げる』 馬田隆明 著"
        date="2024年12月30日"
      />
      {/* {[1, 2, 3].map((i) => (
            <ArticleCard
              key={i}
              title="読書記録｜「解像度を上げる」飯田明明 著"
              date="2024年1月30日"
            />
          ))} */}
    </div>
  );
};

export default Articles;
