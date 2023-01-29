import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin: 5rem 0;
  color: ${(props) => props.color};
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.weightLight};
  text-transform: uppercase;
  text-align: center;
  mix-blend-mode: ${(props) =>
    props.blendMode === "difference" ? "difference" : "unset"};
`;
