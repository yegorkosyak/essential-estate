import "./styles/normalize/normalize.css";
import { theme } from "./styles/utility/global-theme.mjs";
import { device } from "./styles/utility/media-breakpoints.mjs";

import { useState } from "react";
import i18n from "i18next";
import LocaleContext from "./LocaleContext.js";

import styled, { ThemeProvider } from "styled-components";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Agents from "./components/agents/Agents";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <MainContainer>
            <Hero />
            <About />
            <Portfolio />
            <Agents />
            <Contact />
          </MainContainer>
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </LocaleContext.Provider>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.brandBlack};
  padding: 20px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.theme.baseFontSize};
  @media ${device.tablet} {
    padding: 10px;
  }
  @media ${device.mobileL} {
    padding: 5px;
  }
`;
const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;
