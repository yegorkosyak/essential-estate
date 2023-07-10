import "./styles/normalize/normalize.css";
import { theme } from "./styles/utility/global-theme.mjs";
import { device } from "./styles/utility/media-breakpoints.mjs";

import { useState } from "react";
import i18n from "i18next";
import LocaleContext from "./LocaleContext.js";

import styled, { ThemeProvider } from "styled-components";

import Header from "./components/header/Header";

import Main from "./components/main/Main";

import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import Apartment from "./components/apartments/Apartment";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/apartments/:apartmentUUID" element={<Apartment />} />
          </Routes>
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
