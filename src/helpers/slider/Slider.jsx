import { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import { device } from "../../styles/utility/media-breakpoints.mjs";

/**
 * @function Slider
 */
const Slider = ({ slides }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const [slideWidth, setSlideWidth] = useState(0);

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides?.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * slideWidth,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides?.length - 1) * slideWidth,
        activeIndex: slides?.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * slideWidth,
    });
  };
  const slideContainer = createRef(null);
  useEffect(() => {
    const { offsetWidth } = slideContainer.current;
    setSlideWidth(offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SliderContainer ref={slideContainer}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={slideWidth * slides?.length}
      >
        {slides?.map((slide, i) => (
          <Slide key={i} content={slide.attributes.url} width={slideWidth} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  width: calc(26vw - 10px);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  @media ${device.laptopS} {
    width: calc(38vw - 10px);
  }
  @media ${device.tablet} {
    width: calc(60vw - 10px);
  }
  @media ${device.mobileL} {
    width: calc(90vw - 10px);
  }
`;
