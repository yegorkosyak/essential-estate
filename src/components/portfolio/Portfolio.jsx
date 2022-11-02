import styled from "styled-components";

import { SectionTitle } from "../../styles/components/Title";
import { LayoutContainer } from "../../styles/components/LayoutContainer";
import Card from "./Card";

import CardImage1 from "../../assets/images/portfolio/malysiaka/1.jpg";
import CardImage2 from "../../assets/images/portfolio/soltysowska/1.jpg";
import CardImage3 from "../../assets/images/portfolio/barbary/1.jpg";
import CardImage4 from "../../assets/images/portfolio/sliczna/1.jpg";

import { device } from "../../styles/utility/media-breakpoints.mjs";

export default function Portfolio() {
  return (
    <PortfolioSection>
      <LayoutContainer>
        <SectionTitle>Portfolio</SectionTitle>
        <PortfolioGrid>
          <Card
            image={CardImage1}
            title={"Kliny Borkowskie, ul. Małysiaka 26"}
            area={"102m^2"}
            price={"1 099 000 zł"}
            level={"1 in 4"}
            room={"4"}
          />
          <Card
            image={CardImage2}
            title={"Kliny Borkowskie, ul. Małysiaka 26"}
            area={"102m^2"}
            price={"1 099 000 zł"}
            level={"1 in 4"}
            room={"4"}
          />
          <Card
            image={CardImage3}
            title={"Kliny Borkowskie, ul. Małysiaka 26"}
            area={"102m^2"}
            price={"1 099 000 zł"}
            level={"1 in 4"}
            room={"4"}
          />
          <Card
            image={CardImage4}
            title={"Kliny Borkowskie, ul. Małysiaka 26"}
            area={"102m^2"}
            price={"1 099 000 zł"}
            level={"1 in 4"}
            room={"4"}
          />
        </PortfolioGrid>
      </LayoutContainer>
    </PortfolioSection>
  );
}

const PortfolioSection = styled.section`
  background-color: ${(props) => props.theme.brandWhite};
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;
