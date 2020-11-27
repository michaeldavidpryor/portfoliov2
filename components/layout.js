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
