import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className="lead">
          My name is Michael and I am a classically trained chef that has taken the leap in to web
          development.{" "}
        </p>
        <p className="lead">
          I have managed teams in high pressure environments and I wish to bridge these skills with
          my new ones.
        </p>
        <p className="lead">
          Thank you for your time and consideration. Here you will find the start of a successful
          career in web development.
        </p>
      </section>
    </Layout>
  );
}
