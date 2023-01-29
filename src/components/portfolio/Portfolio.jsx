import styled from "styled-components";

import { SectionTitle } from "../../styles/components/Title";
import { LayoutContainer } from "../../styles/components/LayoutContainer";
import Card from "./Card";

import CardImage1 from "../../assets/images/portfolio/malysiaka/1.jpg";
import CardImage2 from "../../assets/images/portfolio/soltysowska/1.jpg";
import CardImage3 from "../../assets/images/portfolio/barbary/1.jpg";
import CardImage4 from "../../assets/images/portfolio/sliczna/1.jpg";

import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Portfolio() {
  const { t } = useTranslation();
  const circleAnime = useRef(null);
  function randomValues() {
    anime({
      targets: ".circle",
      translateX: function () {
        return anime.random(0, circleAnime.current.offsetWidth - 400);
      },
      translateY: function () {
        return anime.random(0, circleAnime.current.offsetHeight - 400);
      },
      easing: "linear",
      duration: 6000,
      delay: 0,
      complete: randomValues,
    });
  }

  useEffect(()=>{
    const numberOfCircles = 10
    for (let i = 0; i < numberOfCircles; i++){
      const circle = document.createElement("div")
      circle.classList.add("circle")
      document.getElementById("circle-wrap").append(circle)
    }
    randomValues();
  },[])
  
  return (
    <PortfolioSection id="portfolio">
      <CirclesAnime id="circle-wrap" ref={circleAnime}>
      </CirclesAnime>
      <LayoutContainer>
        <SectionTitle blendMode="difference" color="#F2F1EE">
          {t("Portfolio.Title")}
        </SectionTitle>
        <PortfolioGrid>
          <Card
            image={CardImage1}
            title={"Kliny Borkowskie, ul. Małysiaka 26"}
            area={"92m^2"}
            price={"899 000 PLN"}
            level={"2 in 5"}
            room={"3"}
          />
          <Card
            image={CardImage2}
            title={"Czyżyny, ul. Sołtysowska 37F"}
            area={"102m^2"}
            price={"1 099 000 PLN"}
            level={"1 in 4"}
            room={"4"}
          />
          <Card
            image={CardImage3}
            title={"Bieżanów, ul. Barbary 12"}
            area={"114m^2"}
            price={"1 050 000 PLN"}
            level={"3 in 4"}
            room={"3"}
          />
          <Card
            image={CardImage4}
            title={"Olsza, ul. Śliczna 36"}
            area={"133m^2"}
            price={"1 199 000 PLN"}
            level={"6 in 6"}
            room={"4"}
          />
        </PortfolioGrid>
      </LayoutContainer>
    </PortfolioSection>
  );
}

const PortfolioSection = styled.section`
  background-color: ${(props) => props.theme.brandWhite};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
`;

const CirclesAnime = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  .circle {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.brandBlack};
    position: absolute;
    @media ${device.mobileL} {
      width: 300px;
      height: 300px;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;
