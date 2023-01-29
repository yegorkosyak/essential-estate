import styled from "styled-components";

import { SectionTitle } from "../../styles/components/Title";

import { theme } from "../../styles/utility/global-theme.mjs";
import { device } from "../../styles/utility/media-breakpoints.mjs";
import AgentImage1 from "../../assets/images/agents/woman1.png";
import AgentImage2 from "../../assets/images/agents/woman2.png";
import AgentImage3 from "../../assets/images/agents/man1.png";
// import AgentImage4 from "../../assets/images/agents/man2.png";
// import AgentImage5 from "../../assets/images/agents/man3.png";

import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";

// import useWindowSize from "../../hooks/useWindowSize";

import anime from "animejs/lib/anime.es.js";

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
  const { t } = useTranslation();

  // let pixelGrid = useRef(null);
  // useEffect(() => {
  //   createGrid(pixelGrid.current);
  // }, []);

  // const handleOnClick = (index, dimension) => {
  //   anime({
  //     targets: ".tile",
  //     backgroundColor: "#f2f1ee",
  //     delay: anime.stagger(50, {
  //       grid: [dimension.columns, dimension.rows],
  //       from: index,
  //     }),
  //   });
  // };

  // const createTile = (index, dimension) => {
  //   const tile = document.createElement("div");
  //   tile.classList.add("tile");
  //   tile.onclick = (e) => handleOnClick(index, dimension);
  //   return tile;
  // };

  // const createTiles = (quantity, wrapper, dimension) => {
  //   Array.from(Array(quantity)).map((tile, index) => {
  //     wrapper.appendChild(createTile(index, dimension));
  //   });
  // };

  // const createGrid = (wrapper) => {
  //   wrapper.innerHTML = "";
  //   let dimension = {
  //     columns: Math.floor(wrapper.offsetWidth / 50),
  //     rows: Math.floor(wrapper.offsetHeight / 50),
  //   };
  //   wrapper.style.setProperty("--columns", dimension.columns);
  //   wrapper.style.setProperty("--rows", dimension.rows);
  //   createTiles(
  //     dimension.columns * dimension.rows,
  //     pixelGrid.current,
  //     dimension
  //   );
  // };

  // window.onresize = () => {
  //   createGrid(pixelGrid.current);
  // };

  return (
    <AgentsContainer id="agents">
      <PixelGrid id="pixel-grid" /*ref={pixelGrid}*/ />
      <SectionTitle color={theme.brandWhite}>{t(`Agents.Title`)}</SectionTitle>
      <AgentsWrap>
        <Agent
          image={AgentImage1}
          name="Elizabeth"
          comment={t(`Agents.Comment1`)}
        />
        <Agent
          image={AgentImage3}
          name="Dmitry"
          comment={t(`Agents.Comment2`)}
        />
        <Agent
          image={AgentImage2}
          name="Polina"
          comment={t(`Agents.Comment3`)}
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

const PixelGrid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  .tile {
    /* border: 0.5px solid white; */
    &:hover {
      background-color: white;
    }
  }
`;

const AgentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  z-index: 2;
  @media ${device.laptop} {
    align-items: center;
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
  width: 220px;
  height: 220px;
`;

const AgentName = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  font-size: 2rem;
`;

const AgentComment = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-size: 1.4rem;
  text-align: center;
  line-height: 130%;
`;
