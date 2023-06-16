import styled from "styled-components";

const Slide = ({ content, width }) => (
  <SlideContainer content={content} width={width} />
);

export default Slide;

const SlideContainer = styled.div`
  width: ${(props) => props.width}px;
  height: 300px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    transform: scale(1.1);
    transition: all 1000ms;
  }
`;
