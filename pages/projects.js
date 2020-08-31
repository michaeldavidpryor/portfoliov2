import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />{" "}
      <CardGroup>
        <Card>
          <a href="https://giphtionary-learning-on-loop.herokuapp.com/">
            <CardImg top width="100%" src="/images/giphtionary_logo.png" alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <a href="https://michaeldavidpryor.github.io/HomeMade/">
            <CardImg top width="100%" src="/images/LOGO.jpg" alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <a href="https://www.etsy.com/shop/PryorMechanical">
            <CardImg top width="100%" src="/images/PMLogo.png" alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}
