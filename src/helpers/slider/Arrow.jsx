import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import styled from "styled-components";

const Arrow = ({ direction, handleClick }) => (
  <ArrowContainer onClick={handleClick} direction={direction}>
    {direction === "right" ? (
      <ArrowPoiner src={rightArrow} alt="" />
    ) : (
      <ArrowPoiner src={leftArrow} alt="" />
    )}
  </ArrowContainer>
);

export default Arrow;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: ${(props) => (props.direction === "right" ? "25px" : "unset")};
  left: ${(props) => (props.direction === "left" ? "25px" : "unset")};
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${(props) => (props.direction === "left" ? "-2px" : "2px")}
    );
    &:focus {
      outline: 0;
    }
  }
`;

const ArrowPoiner = styled.img`
  width: 30px;
`;
