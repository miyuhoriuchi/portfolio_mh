import { getWorksDetail } from "../_libs/microcms";
import ClientOnlyScrollToTop from "../_components/ClientOnlyScrollToTopButton/index";
import Image from "@/node_modules/next/image";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const data = await getWorksDetail(resolvedParams.id);
  return (
    <div className={styles.container}>
      <Image
        src={data.hero.url}
        alt=""
        width={data.hero.width}
        height={data.hero.height}
        className={styles.image}
        priority
      />
      <div className={styles.contents}>
        <div className={styles.overview}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.overviewText}>{data.overviewLong}</p>
          <div className={styles.info}>
            {data.scope && (
              <div className={styles.infoItem}>
                <p className={styles.itemName}>担当範囲</p>
                <p>{data.scope}</p>
              </div>
            )}

            {data.period && (
              <div className={styles.infoItem}>
                <p className={styles.itemName}>制作時期</p>
                <p>{data.period}</p>
              </div>
            )}

            {data.duration && (
              <div className={styles.infoItem}>
                <p className={styles.itemName}>制作期間</p>
                <p>{data.duration}</p>
              </div>
            )}

            {data.tool && (
              <div className={styles.infoItem}>
                <p className={styles.itemName}>使用ツール</p>
                <p>{data.tool}</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.htmlContent}
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      </div>
      <span suppressHydrationWarning>
        <ClientOnlyScrollToTop />
      </span>
    </div>
  );
}
