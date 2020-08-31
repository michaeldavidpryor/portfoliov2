import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import { Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from "reactstrap";
import Link from "next/link";

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
            <CardTitle>
              <h4>Quality</h4>
            </CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>
              <p>
                I have a very deep empathy towards all life. Especially those of animals. As a chef
                I struggled with the disconnect we have with how exactly that piece of meat got to
                be on a plate. Often, the journey was terrible for the animal so I only sourced from
                farmers I know and trusted.{" "}
              </p>{" "}
              <p>
                It all starts with the quality of what you start with. Sourcing from 8 different
                farms is much harder than getting everything from one source. If it were easy,
                everyone would do it.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="\images\cuc.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <h4>Presentation Matters</h4>
            </CardTitle>
            <CardText>
              <p>
                You eat with your eyes first. Obviously if somethings looks gross you're not going
                to want to eat it. This is the same for applications.
              </p>
              <p>
                This is a dish I made consisting of a shrimp mousse piped inside a hollow cucumber,
                with stewed mustards seeds, cucumber "air" and watercress. This was a lot of work
                but the end result is subtle and aesthetically pleasing.
              </p>
              <p>
                I break down this process more
                <a href="/blog"> here</a>.
                <style jsx>
                  {`
        a {
          color: red;
        `}
                </style>
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="\images\cookin.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <h4>Focus</h4>
            </CardTitle>
            <CardText>
              <p>
                Focus is paramount when cooking professionally with guests literally paying
                thousands of dollars for a meal.{" "}
              </p>
              <p>
                Team work, training, discipline, innovation are all just some of the things
                neccessary when developing an application.These are all things I bring to the table
                on my first day.
              </p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}
<style jsx>{`
  a {
    p{
      red;
    }
  }
`}</style>;
