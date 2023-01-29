import styled from "styled-components";

import heroImage from "../../assets/images/hero/hero-image.jpg";
import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <ContainerHero>
      <ImageWrap>
        <HeroImage src={heroImage} alt="" />
      </ImageWrap>
      <TitleWrap>
        <HeroTitle>{t("Hero.Title")}</HeroTitle>
        <HeroText>{t("Hero.Subtitle")}</HeroText>
      </TitleWrap>
    </ContainerHero>
  );
}

const ContainerHero = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #f2f1ee;
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridCols};
  grid-template-rows: ${(props) => props.theme.gridRows};
  position: relative;
  overflow: hidden;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #0d0e11;
    top: 70%;
    right: -90px;
    z-index: -1;
  }
`;

const ImageWrap = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 7;
  position: relative;
  z-index: 0;
  @media ${device.laptop} {
    grid-row-start: 1;
    grid-row-end: 7;
    grid-column-end: 13;
  }

  &:after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #0d0e11;
    top: 60%;
    right: -25%;
    z-index: -1;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: -4px;
`;

const TitleWrap = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 3;
  grid-row-end: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.laptop} {
    grid-column-start: 4;
    grid-column-end: 10;
    grid-row-start: 3;
    grid-row-end: 5;
    position: absolute;
    background-color: ${(props) => props.theme.brandWhite};
    padding: 40px;
  }
  @media ${device.tablet} {
    grid-column-start: 3;
    grid-column-end: 11;
  }
  @media ${device.mobileL} {
    padding: 20px;
  }
`;

const HeroTitle = styled.h1`
  font-weight: ${(props) => props.theme.weightBlack};
  font-size: 3rem;
  margin: 0;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-weight: ${(props) => props.theme.weightXLight};
  text-align: right;
  font-size: 1.5rem;
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;
