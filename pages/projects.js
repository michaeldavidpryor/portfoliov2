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
            <CardTitle>
              <h4>giphtionary</h4>
            </CardTitle>
            <CardText>
              <p>
                A fun learning tool that creates context between what a word is traditonally defined
                as and what it may be used as in todays culture.{" "}
              </p>
              <p>
                Search for a word to get the Merriam Webster definition back along with gifs of the
                same word through Giphy. Save your searched word in your account to come back to
                later.{" "}
              </p>
              <p>
                Technology used for this project include node.js, React, Mongo DB Atlas, express,
                Javascript, Github, and Auth0.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <a href="https://michaeldavidpryor.github.io/HomeMade/">
            <CardImg top width="100%" src="/images/LOGO.jpg" alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle>
              <h4>HomeMade</h4>
            </CardTitle>
            <CardText>
              <p>
                {" "}
                A tool to plan out your next night in because frankly, we're not going anywhere for
                awhile.
              </p>{" "}
              <p>
                Choose your cuisine and HomeMade takes care of the rest. It returns a recipe in your
                specified cuisine along with a cocktail and a playlist to set the mood.
              </p>
              <p>
                Technology used for this project include node.js, express, Javascript, and Github.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <a href="https://www.etsy.com/shop/PryorMechanical">
            <CardImg top width="100%" src="/images/PMLogo.png" alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle>
              <h4>Pryor Mechanical</h4>
            </CardTitle>
            <CardText>
              <p>My side hustle where I sell custom USB cables for keyboard and tech enthusiast</p>
              <p>All branding, and graphics are made by me. </p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}
