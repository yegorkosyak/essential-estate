import styled from "styled-components";

import { device } from "../../styles/utility/media-breakpoints.mjs";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
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
    <FooterContainer bgColor={location.pathname !== "/" ? "#F2F1EE" : "unset"}>
      <Terms>
        @{new Date().getFullYear()}, ONO
        <br />
        NIP 9452259818
      </Terms>
      <NavLinks color={location.pathname !== "/" ? "#0d0e11" : "#F2F1EE"}>
        <Link onClick={() => scrollToSection("about")}>
          {t(`Footer.About`)}
        </Link>
        <Link onClick={() => scrollToSection("portfolio")}>
          {t(`Footer.Portfolio`)}
        </Link>
        <Link onClick={() => scrollToSection("agents")}>
          {t(`Footer.Agents`)}
        </Link>
      </NavLinks>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  min-height: 200px;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  gap: 30%;
  background-color: ${(props) => props.bgColor};
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    min-height: 180px;
    align-items: flex-start;
    padding: 0 4rem;
  }
`;

const Terms = styled.p`
  color: ${(props) => props.theme.brandGrey};
  @media ${device.mobileL} {
    padding-left: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  @media ${device.mobileL} {
    padding-left: 1rem;
  }
`;

const Link = styled.a`
  font-weight: ${(props) => props.theme.weightLight};
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.5;
    transition: opacity 1000ms;
  }
  @media ${device.mobileL} {
    margin-bottom: 10px;
  }
`;
