import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />

      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <a href="https://www.etsy.com/shop/PryorMechanical" target="_blank">
              {" "}
              <img
                src="/images/200px-Etsy_logo.jpg"
                title="Michael Pryor Etsy Shop"
                img
                class="img-fluid"
                alt="Etsy Icon"
              ></img>
            </a>

            <a href="https://michaeldavidpryor.github.io/HomeMade/" target="_blank">
              {" "}
              <img
                src="/images/LOGO.JPG"
                title="Homemade Project Page Github Page"
                img
                class="img-fluid"
                alt="Homemade logo"
              ></img>
            </a>
            <a href="https://giphtionary-learning-on-loop.herokuapp.com/" target="_blank">
              {" "}
              <img
                src="/images\giphtionary_logo.gif"
                title="Giphtionary"
                img
                class="img-fluid"
                alt="Giphtionary"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
