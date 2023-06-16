import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import { SectionTitle } from "../../styles/components/Title";

import { theme } from "../../styles/utility/global-theme.mjs";
import { device } from "../../styles/utility/media-breakpoints.mjs";

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

export default function Agents({ locale }) {
  const { t } = useTranslation();
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/agents?locale=${locale}&populate=*`)
      .then(({ data }) => {
        setAgents(data.data);
      });
  }, [locale]);
  return (
    <AgentsContainer id="agents">
      <SectionTitle color={theme.brandWhite}>{t(`Agents.Title`)}</SectionTitle>

      <AgentsWrap>
        {agents.map(({ id, attributes }) => (
          <Agent
            key={id}
            image={
              "http://localhost:1337" + attributes.photo.data.attributes.url
            }
            agentName={attributes.name}
            comment={attributes.description}
            quote={attributes.quote}
          />
        ))}
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
  margin-right: 5px;
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
