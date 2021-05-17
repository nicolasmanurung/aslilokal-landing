import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MitraContent from "../../content/MitraContent.json";
import PembeliContent from '../../content/PembeliContent.json'
import ProductContent from "../../content/ProductContent.json";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="main"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="appaslilokal.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={MitraContent.title}
        content={MitraContent.text}
        section={MitraContent.section}
        icon="mitrasection.svg"
        id="mitra"
      />
      <ContentBlock
        type="right"
        title={PembeliContent.title}
        content={PembeliContent.text}
        section={PembeliContent.section}
        icon="pembelisection.svg"
        id="pembeli"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="customersection.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
