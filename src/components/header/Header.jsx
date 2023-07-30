import styled from "styled-components";
import { useState, useContext } from "react";

import logo from "../../assets/logo/logo.png";
import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext.js";
import i18n from "i18next";
import { useNavigate, useLocation } from "react-router-dom";

import localeIcon from "../../assets/icons/world.png";

export default function Header() {
  let { locale, setLocale } = useContext(LocaleContext);
  const [selectOpen, setSelectOpen] = useState(false);
  const defaultLocale = ["en", "uk", "pl", "ru"];
  const fillLocaleSelect = (locale = "pl") => {
    return defaultLocale.filter((elem) => elem !== locale);
  };
  let [localeList, setLocaleList] = useState(fillLocaleSelect());
  const navigate = useNavigate();
  const location = useLocation();

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const scrollToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <ContainerHeader>
      <LocaleToggle
        onClick={() => setSelectOpen(!selectOpen)}
        navOpen={navOpen}
      >
        {locale.toUpperCase()}
        <LocaleIcon src={localeIcon} alt="" />
        <LocaleSelect selectOpen={selectOpen}>
          {localeList &&
            localeList.map((elem, idx) => {
              let upper = elem.toUpperCase();
              return (
                <Locale
                  key={idx}
                  onClick={() => {
                    setLocaleList(fillLocaleSelect(elem));
                    setLocale(elem);
                    changeLocale(elem);
                  }}
                >
                  {upper}
                </Locale>
              );
            })}
        </LocaleSelect>
      </LocaleToggle>
      <Logo src={logo} alt="" onClick={() => navigate("/")} />
      <Nav>
        <Link onClick={() => scrollToSection("about")}>
          {t("Header.About")}
        </Link>
        <Link onClick={() => scrollToSection("portfolio")}>
          {t("Header.Portfolio")}
        </Link>
        <Link onClick={() => scrollToSection("agents")}>
          {t("Header.Agents")}
        </Link>
        <ContactLink onClick={() => scrollToSection("contact")}>
          {t("Header.Contact")}
        </ContactLink>
      </Nav>
      <BurgerButton onClick={() => setNavOpen(!navOpen)} navOpen={navOpen}>
        <BurgerNavWrap navOpen={navOpen}>
          <BurgerDash />
          <BurgerDash />
          <BurgerDash />
        </BurgerNavWrap>
      </BurgerButton>
      <BurgerMenu navOpen={navOpen}>
        <BurgerNav>
          <BurgerLink
            onClick={() => {
              scrollToSection("about");
              setNavOpen(!navOpen);
            }}
          >
            {t("Header.About")}
          </BurgerLink>
          <BurgerLink
            onClick={() => {
              scrollToSection("portfolio");
              setNavOpen(!navOpen);
            }}
          >
            {t("Header.Portfolio")}
          </BurgerLink>
          <BurgerLink
            onClick={() => {
              scrollToSection("agents");
              setNavOpen(!navOpen);
            }}
          >
            {t("Header.Agents")}
          </BurgerLink>
          <BurgerLink
            onClick={() => {
              scrollToSection("contact");
              setNavOpen(!navOpen);
            }}
          >
            {t("Header.Contact")}
          </BurgerLink>
        </BurgerNav>
      </BurgerMenu>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  width: auto;
  height: 100px;
  background-color: ${(props) => props.theme.brandWhite};
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.brandBlack};
  border-bottom: 1px solid ${(props) => props.theme.brandBlack};
  position: relative;
  @media ${device.tablet} {
    position: fixed;
    padding: 0 20px;
    z-index: 1;
    left: 10px;
    right: 10px;
    box-sizing: border-box;
  }
  @media ${device.mobileL} {
    left: 5px;
    right: 5px;
    height: 60px;
  }
`;
const LocaleToggle = styled.span`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.weightXLight};
  position: absolute;
  top: 40%;
  left: 30%;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  @media ${device.laptop} {
    display: ${(props) => (props.navOpen === true ? "block" : "none")};
  }
  @media ${device.mobileL} {
    left: unset;
    right: 35%;
  }
`;
const LocaleIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.5rem;
`;
const LocaleSelect = styled.div`
  display: ${(props) => (props.selectOpen === true ? "block" : "none")};
  position: absolute;
  left: -10%;
  top: 100%;
`;
const Locale = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.brandWhite};
  &:hover {
    opacity: 0.9;
  }
`;
const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 100px;
  }
`;
const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  z-index: 1;
  gap: 70px;
  @media ${device.laptop} {
    display: none;
  }
`;
const Link = styled.li`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightXLight};
  cursor: pointer;
`;
const ContactLink = styled(Link)`
  color: ${(props) => props.theme.brandWhite};
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.brandBlack};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
const BurgerButton = styled.div`
  display: none;
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: ${(props) => props.theme.brandBlack};
  border-radius: 50%;
  right: 5%;
  z-index: 2;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    display: flex;
  }
  @media ${device.mobileL} {
    width: 80px;
    height: 80px;
  }
`;
const BurgerNavWrap = styled.div`
  height: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:nth-child(1) {
    transition: all 1000ms;
    transform: ${(props) =>
      props.navOpen
        ? "translateY(5px) rotate(45deg)"
        : "translateY(0) rotate(0)"};
  }
  div:nth-child(2) {
    transition: all 1000ms;
    opacity: ${(props) => (props.navOpen ? "0" : "1")};
  }
  div:nth-child(3) {
    transition: all 1000ms;
    transform: ${(props) =>
      props.navOpen
        ? "translateY(-5px) rotate(-45deg)"
        : "translateY(0) rotate(0)"};
  }
`;
const BurgerDash = styled.div`
  width: 80px;
  height: 1px;
  background-color: ${(props) => props.theme.brandWhite};

  @media ${device.mobileL} {
    width: 40px;
  }
`;
const BurgerMenu = styled.div`
  display: none;
  @media ${device.laptop} {
    padding-top: 30px;
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.brandWhite};
    left: 0;
    top: 0;
    transform: ${(props) =>
      props.navOpen ? "translateX(0%)" : "translateX(-100%)"};
    transition: all 1000ms;
    z-index: 1;
  }
`;
const BurgerNav = styled.ul`
  list-style-type: none;
`;
const BurgerLink = styled.li`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightXLight};
`;
