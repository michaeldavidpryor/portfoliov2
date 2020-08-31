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
        <p className="lead">Thank you for your time and consideration.</p>{" "}
        <p className="lead">
          Here you will find the start of a successful career in web development.
        </p>
      </section>
    </Layout>
  );
}
