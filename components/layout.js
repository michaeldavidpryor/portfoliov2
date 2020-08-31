import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/navbar";
import { Col, Row } from "reactstrap";
import Link from "next/link";

const name = "Michael Pryor";
export const siteTitle = "Portfolio";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Michael Pryor Portfolio" />
        <meta
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
          <img className="img-fluid" id="me" src="/images/mainpic.jpeg"></img>
        </Col>

        <Col>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <main>{children}</main>
          <a href="https://github.com/michaeldavidpryor">
            <img src="/images/github.png" id="github" alt="image" />
          </a>
          <a href="https://www.linkedin.com/in/mdpryor">
            <img src="/images/linkedin2.png" id="linkedin" alt="image" />
          </a>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
}
