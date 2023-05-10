import styled from "styled-components";
import { useEffect, createRef } from "react";

import { SectionTitle } from "../../styles/components/Title";

import { theme } from "../../styles/utility/global-theme.mjs";
import { device } from "../../styles/utility/media-breakpoints.mjs";
import Andrew from "../../assets/images/agents/andrew.png";
import Eli from "../../assets/images/agents/eli.png";
import Polina from "../../assets/images/agents/polina.png";
import Viacheslav from "../../assets/images/agents/viacheslav.png";

import { useTranslation } from "react-i18next";

const Agent = ({ image, agentName, comment, quote }) => {
  return (
    <AgentBody>
      <Frame>
        <AgentPhoto src={image} alt={agentName} />
      </Frame>

      <AgentInfo>
        <AgentName>{agentName}</AgentName>
        <AgentComment>{comment}</AgentComment>
        <Quote>
          <i>{quote}</i>
        </Quote>
      </AgentInfo>
    </AgentBody>
  );
};

export default function Agents() {
  const { t } = useTranslation();
  return (
    <AgentsContainer id="agents">
      <SectionTitle color={theme.brandWhite}>{t(`Agents.Title`)}</SectionTitle>

      <AgentsWrap>
        <Agent
          image={Andrew}
          agentName="Andrew"
          comment={t(`Agents.Andrew`)}
          quote={t("Agents.AndrewQuote")}
        />

        <Agent
          image={Eli}
          agentName="Elizaveta"
          comment={t(`Agents.Elizaveta`)}
          quote={t("Agents.ElizavetaQuote")}
        />

        <Agent
          image={Polina}
          agentName="Polina"
          comment={t(`Agents.Polina`)}
          quote={t("Agents.PolinaQuote")}
        />

        <Agent
          image={Viacheslav}
          agentName="Viacheslav"
          comment={t(`Agents.Viacheslav`)}
          quote={t("Agents.ViacheslavQuote")}
        />
      </AgentsWrap>
    </AgentsContainer>
  );
}

const AgentsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 0 8rem;
  position: relative;
  z-index: 0;
`;

const AgentsWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 3rem;
  @media ${device.tablet} {
    grid-template-columns: unset;
    grid-template-rows: auto;
  }
`;

const AgentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  gap: 2rem;
  @media ${device.tablet} {
    grid-template-columns: unset;
    grid-template-rows: 1fr auto;
    gap: 0;
  }
`;

const Frame = styled.div`
  @media ${device.tablet} {
    text-align: center;
  }
`;

const AgentPhoto = styled.img`
  width: 40%;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const AgentInfo = styled.div`
  align-self: flex-end;
  @media ${device.tablet} {
    padding: 2rem;
  }
`;

const AgentName = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightBlack};
  font-size: 1.7rem;
`;

const AgentComment = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-size: 1.2rem;
  line-height: 130%;
`;

const Quote = styled.p`
  color: ${(props) => props.theme.brandGrey};
  padding-left: 2rem;
  font-size: 1.3rem;
  position: relative;
  &:before {
    content: "";
    background-color: ${(props) => props.theme.brandWhite};
    width: 2px;
    height: 100%;
    position: absolute;
    left: 1rem;
    top: 0;
  }
`;
