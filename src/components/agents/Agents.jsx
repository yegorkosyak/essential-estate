import styled from "styled-components";

import { SectionTitle } from "../../styles/components/Title";

import { theme } from "../../styles/utility/global-theme.mjs";
import { device } from "../../styles/utility/media-breakpoints.mjs";
import AgentImage1 from "../../assets/images/agents/agent1.png";

const Agent = ({ image, name, comment }) => {
  return (
    <AgentBody>
      <AgentImage src={image} />
      <AgentName>{name}</AgentName>
      <AgentComment>
        <i>{comment}</i>
      </AgentComment>
    </AgentBody>
  );
};

export default function Agents() {
  return (
    <AgentsContainer>
      <SectionTitle color={theme.brandWhite}>Agents</SectionTitle>
      <AgentsWrap>
        <Agent
          image={AgentImage1}
          name="Krzysztof kowalski"
          comment={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1"
          }
        />
        <Agent
          image={AgentImage1}
          name="Krzysztof kowalski"
          comment={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1"
          }
        />
        <Agent
          image={AgentImage1}
          name="Krzysztof kowalski"
          comment={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1"
          }
        />
      </AgentsWrap>
    </AgentsContainer>
  );
}

const AgentsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 0;
`;

const AgentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: column;
    gap: 50px;
  }
`;

const AgentBody = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const AgentImage = styled.img`
  border: 3px solid ${(props) => props.theme.brandWhite};
  border-radius: 50%;
`;

const AgentName = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  font-size: 1.5rem;
`;

const AgentComment = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-size: 1.4rem;
  text-align: center;
  line-height: 130%;
`;
