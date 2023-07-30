import styled from "styled-components";

import { SectionTitle } from "@styles/components/Title";

import aboutTime from "@assets/images/about/about-1.jpg";
import aboutOnline from "@assets/images/about/about-2.jpg";
import aboutQuality from "@assets/images/about/about-3.jpg";
import breakRight from "@assets/svg/section-break/diamond-break-right.svg";
import breakLeft from "@assets/svg/section-break/diamond-break-left.svg";
import { theme } from "@styles/utility/global-theme.mjs";
import { device } from "@styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";

const AboutSection = ({ reverse, image, part1, part2 }) => {
  const { t } = useTranslation();
  return (
    <ContentContainer reverse={reverse}>
      <ImageWrap image={image}></ImageWrap>
      <ContentWrap>
        <ContentTitle color={theme.brandWhite}>
          {t(`About.${part1}`)}
        </ContentTitle>
        <ContentText color={theme.brandWhite}>
          {t(`About.${part2}`)}
        </ContentText>
      </ContentWrap>
    </ContentContainer>
  );
};

export default function About() {
  const { t } = useTranslation();
  return (
    <ContainerAbout id="about">
      <SectionTitle color={theme.brandWhite}>{t("About.Title")}</SectionTitle>

      <AboutSection image={aboutTime} part1="Subtitle1" part2="Text1" />
      <SectionBreak svg={breakRight} />

      <AboutSection
        reverse={true}
        image={aboutOnline}
        part1="Subtitle2"
        part2="Text2"
      />
      <SectionBreak svg={breakLeft} />

      <AboutSection image={aboutQuality} part1="Subtitle3" part2="Text3" />
    </ContainerAbout>
  );
}

const ContainerAbout = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 0;
`;

const ContentContainer = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const SectionBreak = styled.div`
  min-height: 150px;
  background: center/cover no-repeat url(${(props) => props.svg});
  bottom: 0;
`;

const ImageWrap = styled.div`
  min-width: 60%;
  min-height: 440px;
  background: center/cover no-repeat url(${(props) => props.image});
  border-radius: 40px;
  box-shadow: 0px 0px 30px -5px rgba(255, 255, 255, 0.5);
  @media ${device.laptop} {
    min-width: 50%;
    min-height: 320px;
  }
  @media ${device.tablet} {
    width: 50%;
    margin: 0 auto;
    min-height: 220px;
  }
  @media ${device.tabletS} {
    width: 70%;
    height: 280px;
  }
  @media ${device.mobileL} {
    height: 220px;
  }
`;

const ContentWrap = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentTitle = styled.h3`
  color: ${(props) => props.color};
  font-size: 1.5rem;
`;

const ContentText = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.theme.weightXLight};
  line-height: 150%;
  font-size: 1.2rem;
`;
