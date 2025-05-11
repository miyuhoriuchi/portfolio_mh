import WorkCard from "../WorkCard/index";
import styles from "./index.module.css";
import { getWorksList } from "@/app/_libs/microcms";
import Link from "@/node_modules/next/link";

const Works = async () => {
  const { contents: worksTop } = await getWorksList({
    filters: "isDisplayTop[equals]true",
    limit: 3,
    orders: "-order",
  });
  const { contents: worksOther } = await getWorksList({
    filters: "isDisplayTop[equals]false",
    orders: "-order",
  });
  return (
    <>
      <div className={styles.worksTop}>
        <p className={styles.subCategoryName}>UI/UXデザイン（自主制作）</p>
        <div className={styles.worksGrid}>
          <Link href={`/${worksTop[0].id}`}>
            <WorkCard
              title={worksTop[0].title}
              category={worksTop[0].category}
              eyecatch={worksTop[0].eyecatch}
              hero={worksTop[0].hero}
              small={false}
            />
          </Link>
          <Link href={`/${worksTop[1].id}`}>
            <WorkCard
              title={worksTop[1].title}
              category={worksTop[1].category}
              eyecatch={worksTop[1].eyecatch}
              hero={worksTop[1].hero}
              small={false}
            />
          </Link>
          <Link href={`/${worksTop[2].id}`}>
            <WorkCard
              title={worksTop[2].title}
              category={worksTop[2].category}
              eyecatch={worksTop[2].eyecatch}
              hero={worksTop[2].hero}
              small={false}
            />
          </Link>
        </div>
      </div>
      <div>
        <p className={styles.subCategoryName}>その他のデザイン</p>
        <div className={styles.worksGrid}>
          {worksOther.map((work) => (
            <Link href={`/${work.id}`} key={work.id}>
              <WorkCard
                title={work.title}
                category={work.category}
                eyecatch={work.eyecatch}
                hero={work.hero}
                small={true}
                key={work.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
