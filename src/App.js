import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 50% 100%);
  background-color: #f9fcfd;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 50% 0%, 33% 100%, 0 100%);
  background-color: #f6f6f6;


`;




const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
