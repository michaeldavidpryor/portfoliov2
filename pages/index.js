import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className="lead">Thank you for your time and consideration.</p>

        <p className="lead">
          The question I always ask myself, "How does this work?" has lead me to pursue my passion
          of web and software development
        </p>
      </section>
    </Layout>
  );
}
