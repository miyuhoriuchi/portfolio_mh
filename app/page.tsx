import WorkCard from "./_components/WorkCard/index";
import ArticleCard from "./_components/ArticleCard/index";
import styles from "./page.module.css";
import Image from "@/node_modules/next/image";
import Section from "./_components/Section/index";
import Works from "./_components/Works/index";
import Articles from "./_components/Articles/index";
import About from "./_components/About/index";
import Contact from "./_components/Contact/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section title="WORKS" subTitle="制作物" isContact={false}>
        <Works />
      </Section>

      <Section title="ARTICLES" subTitle="ブログ記事" isContact={false}>
        <Articles />
      </Section>

      <Section title="ABOUT ME" subTitle="自己紹介" isContact={false}>
        <About />
      </Section>

      <Section title="CONTACT" subTitle="ご連絡はこちらから" isContact={true}>
        <Contact />
      </Section>
    </main>
  );
}
