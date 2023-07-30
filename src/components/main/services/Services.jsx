import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { SectionTitle } from "@styles/components/Title";
import { theme } from "@styles/utility/global-theme.mjs";
import { device } from "@styles/utility/media-breakpoints.mjs";

import consultings from "@assets/icons/services/consultant.png";
import property from "@assets/icons/services/property.png";
import rent from "@assets/icons/services/keys.png";

export default function Services() {
  const { t } = useTranslation();

  return (
    <ServicesContainer>
      <SectionTitle color={theme.brandWhite}>
        {t("Services.Title")}
      </SectionTitle>
      <ServiceList>
        <ServiceWrap>
          <ServiceIcon src={consultings} alt="" />
          <SericeName>{t("Services.Consultings")}</SericeName>
        </ServiceWrap>
        <ServiceWrap>
          <ServiceIcon src={property} alt="" />
          <SericeName>{t("Services.BuySell")}</SericeName>
        </ServiceWrap>
        <ServiceWrap>
          <ServiceIcon src={rent} alt="" />
          <SericeName>{t("Services.Rent")}</SericeName>
        </ServiceWrap>
      </ServiceList>
    </ServicesContainer>
  );
}

const ServicesContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const ServiceWrap = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServiceIcon = styled.img`
  @media ${device.tablet} {
    width: 100px;
  }
`;

const SericeName = styled.h2`
  color: #f2f1ee;
  text-transform: uppercase;
`;
