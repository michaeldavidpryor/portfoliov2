import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default function About() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />{" "}
      <CardGroup>
        <Card>
          <CardImg top width="100%" src="\images\fishy.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="\images\cookin.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="\images\cuc.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
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
