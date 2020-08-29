import Head from "next/head";
import { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";

export default function PastLife() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />

      <div class="text-center">
        <>
          <img
            class="img-fluid"
            src="/images/cookin-640.png"
            srcset="/images/cookin-320.png 1x,/images/cookin-480.png 2x,/images/cookin-640.png 3x"
            alt="Cookin"
          />
          <img
            class="img-fluid"
            src="/images/cucdish@640.png"
            srcset="/images/cucdish@320.png 1x,/images/cucdish@480.png 2x,/images/cucdish@640.png 3x"
            alt="cucumberdish"
          />
          <img
            class="img-fluid"
            src="/images/fishy@640.png"
            srcset="/images/fishy@320.png 1x,/images/fishy@480.png 2x,/images/fishy@640.png 3x"
            alt="fishy"
          />
        </>
      </div>
    </>
  );
}
