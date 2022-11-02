import styled from "styled-components";

import logo from "../../assets/logo/logo.png";
import { device } from "../../styles/utility/media-breakpoints.mjs";

export default function Header() {
  return (
    <ContainerHeader>
      <Logo src={logo} alt=""></Logo>
      <Nav>
        <Link>About</Link>
        <Link>Portfolio</Link>
        <Link>Agents</Link>
        <ContactLink>Contact</ContactLink>
      </Nav>
      <BurgerNav>
        <BurgerNavWrap>
          <BurgerDash />
          <BurgerDash />
          <BurgerDash />
        </BurgerNavWrap>
      </BurgerNav>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  width: auto;
  margin: 0 auto;
  height: 100px;
  background-color: ${(props) => props.theme.brandWhite};
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.brandBlack};
  position: relative;
  @media ${device.laptop} {
  }
`;

const Logo = styled.img`
  width: 150px;
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
`;

const ContactLink = styled(Link)`
  color: white;
  position: relative;
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

const BurgerNav = styled.div`
  display: none;
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: ${(props) => props.theme.brandBlack};
  border-radius: 50%;
  right: 5%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    display: flex;
  }
`;

const BurgerNavWrap = styled.div`
  height: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BurgerDash = styled.div`
  width: 80px;
  height: 1px;
  background-color: ${(props) => props.theme.brandWhite};
`;
