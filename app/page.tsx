import styles from "./page.module.css";
import Section from "./_components/Section/index";
import Works from "./_components/Works/index";
import Articles from "./_components/Articles/index";
import About from "./_components/About/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section title="" subTitle="" id="about">
        <About />
      </Section>
      <Section title="WORKS" subTitle="制作物" id="works">
        <Works />
      </Section>
      <Section title="ARTICLES" subTitle="ブログ記事" id="articles">
        <Articles />
      </Section>
    </main>
  );
}
