import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Terms>
        Terms and Conditions
        <br />
        Privacy Policy & Cookies Policy
        <br />
        <br />
        @2022, ONO
      </Terms>
      <NavLinks>
        <Link>About</Link>
        <Link>Portfolio</Link>
        <Link>Agents</Link>
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
`;

const Terms = styled.p`
  color: ${(props) => props.theme.brandGrey};
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
`;
