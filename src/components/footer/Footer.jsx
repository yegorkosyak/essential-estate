import styled from "styled-components";

import { device } from "../../styles/utility/media-breakpoints.mjs";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <Terms>
        {/* Terms and Conditions
        <br />
        Privacy Policy & Cookies Policy
        <br />
        <br /> */}
        @2022, ONO
      </Terms>
      <NavLinks>
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
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30%;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    min-height: 180px;
    align-items: flex-start;
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
  @media ${device.mobileL} {
    padding-left: 1rem;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.brandWhite};
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
