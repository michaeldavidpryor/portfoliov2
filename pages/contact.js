import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import { Container, Row, Col } from "reactstrap";

export default function Contact() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />

      <Container>
        <Row>
          <Col sm={{ size: "auto", offset: 1 }}>
            <h2>
              <a href="https://drive.google.com/file/d/158hnJCl1eRynIdn1Ov8BCilnipjHOkMe/view?usp=sharing">
                Resume
              </a>
            </h2>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }}>
            <a href="https://www.linkedin.com/in/mdpryor" target="_blank">
              {" "}
              <img
                src="/images/LinkedIn-Logo200.jpg"
                title="Michael Pryor Linked In Profile"
                class="img-fluid"
                alt="Linked in Icon"
              ></img>
            </a>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }}>
            <a href="https://github.com/michaeldavidpryor" target="_blank">
              {" "}
              <img
                src="/images/github.jpg"
                title="Michael Pryor Github Page"
                class="img-fluid"
                alt="Github Icon"
              ></img>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
