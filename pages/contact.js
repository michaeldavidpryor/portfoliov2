import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
