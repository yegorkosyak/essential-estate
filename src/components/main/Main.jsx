import styled from "styled-components";

import Hero from "../hero/Hero";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Agents from "../agents/Agents";
import Contact from "../contact/Contact";
import FeedbackComponent from "../form/FeedbackComponent";

function Main() {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Portfolio />
      <Agents />
      <FeedbackComponent />
      <Contact />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;
