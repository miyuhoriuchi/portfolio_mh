import WorkCard from "../WorkCard/index";
import styles from "./index.module.css";

const Works = () => {
  return (
    <div className={styles.worksGrid}>
      <WorkCard
        title="The Live Scheduler"
        category="UXデザイン・UIデザイン"
        description="「”好き”を逃さない」
      観劇やライブ参加など、エンタメ鑑賞を趣味とする方向けのスケジュール管理アプリです。"
        small={false}
      />
      <WorkCard
        title="O Yasai"
        category="UIデザイン（情報設計〜ビジュアルデザイン）"
        description="青果卸の業務を想定したtoBの受注管理アプリです。"
        small={false}
      />
      <WorkCard
        title="Voice Flow"
        category="UIデザイン（ビジュアルデザイン）"
        description="既存のSNSに疲れてしまった人へ。
      「ちょうど良い心地よさ」を提供する音声SNSアプリです。"
        small={false}
      />
      <WorkCard
        title="『補講男子』 補講シリーズ "
        category="グラフィックデザイン"
        small={true}
      />
      <WorkCard
        title="東大女子のためのフリーペーパーbiscUiT"
        category="グラフィックデザイン・DTP"
        small={true}
      />
    </div>
  );
};

export default Works;
