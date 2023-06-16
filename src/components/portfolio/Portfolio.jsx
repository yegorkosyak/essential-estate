import styled from "styled-components";

import { SectionTitle } from "../../styles/components/Title";
import Card from "./Card";

import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

import anime from "animejs";
import axios from "axios";

export default function Portfolio() {
  const [apartments, setApartments] = useState([]);
  const [apartmentsByListingType, setApartmentsByListingType] = useState([]);
  const [transformed, setTransformed] = useState(false);
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

  useEffect(() => {
    const numberOfCircles = 10;
    for (let i = 0; i < numberOfCircles; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      document.getElementById("circle-wrap").append(circle);
    }
    randomValues();
    axios
      .get("https://strapi.essentialestate.link/api/apartments?populate=*")
      .then(({ data }) => {
        setApartments(data.data);
        setApartmentsByListingType(
          data.data.filter(
            (apartments) => apartments.attributes.listing_type === "sale"
          )
        );
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSwitchState = () => {
    const switchButton = document.getElementById("switch-button");
    if (!transformed) {
      switchButton.style.setProperty("--beforeTransform", "100%");
      setTransformed(!transformed);
      setApartmentsByListingType(
        apartments.filter(
          (apartments) => apartments.attributes.listing_type === "rent"
        )
      );
    } else {
      switchButton.style.setProperty("--beforeTransform", "0%");
      setTransformed(!transformed);
      setApartmentsByListingType(
        apartments.filter(
          (apartments) => apartments.attributes.listing_type === "sale"
        )
      );
    }
  };

  return (
    <PortfolioSection id="portfolio" transformed={transformed}>
      <CirclesAnime
        id="circle-wrap"
        ref={circleAnime}
        transformed={transformed}
      ></CirclesAnime>
      <PortfolioContainer>
        <SectionTitle blendMode="difference" color="#F2F1EE">
          {t("Portfolio.Title")}
        </SectionTitle>
        <SwitchButton
          id="switch-button"
          onClick={() => changeSwitchState()}
          transformed={transformed}
        >
          <span>{t("Portfolio.Sale")}</span>
          <span>{t("Portfolio.Rent")}</span>
        </SwitchButton>
        <PortfolioGrid>
          {apartmentsByListingType.map(({ id, attributes }) => (
            <Card
              key={id}
              images={attributes.photos.data}
              title={attributes.location}
              area={attributes.area}
              price={attributes.price}
              level={attributes.floor}
              room={attributes.room}
              transformed={transformed}
            />
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
}

const PortfolioContainer = styled.div``;

const PortfolioSection = styled.section`
  background-color: ${(props) =>
    props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
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
    background-color: ${(props) =>
      props.transformed ? props.theme.brandWhite : props.theme.brandBlack};
    position: absolute;
    @media ${device.mobileL} {
      width: 300px;
      height: 300px;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  @media ${device.laptopS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

const SwitchButton = styled.div`
  background-color: ${(props) =>
    props.transformed ? props.theme.brandWhite : props.theme.brandBlack};
  width: max-content;
  height: 3rem;
  margin: 2rem auto;
  border-radius: 3vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  & span {
    font-size: 2rem;
    margin: 01rem;
    padding: 1rem;
    position: relative;
    z-index: 2;
    mix-blend-mode: difference;
    color: ${(props) => props.theme.brandWhite};
    @media ${device.mobileL} {
      font-size: 1rem;
    }
  }

  &::before {
    content: "";
    background-color: ${(props) =>
      props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
    width: 50%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(var(--beforeTransform));
    transition: all 500ms;
  }
`;
