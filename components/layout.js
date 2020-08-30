import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavBar from "../components/navbar";
import { Col, Row, Container } from "reactstrap";

const name = "Michael Pryor";
export const siteTitle = "Portfolio";

export default function Layout({ children, home }) {
  return (
    <>
      <NavBar />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          // property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Row xs="4">
        <Col></Col>
        <Col>
          <img class="img-fluid" id="me" src="/images/mainpic.jpeg"></img>
        </Col>

        <Col>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <main>{children}</main>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
}
