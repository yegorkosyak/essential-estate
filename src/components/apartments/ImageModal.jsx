import { useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../../styles/utility/media-breakpoints.mjs";

const isClickInsideRectangle = (e, element) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

const ImageModal = ({ title, isOpened, onProceed, onClose, imageSrc }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  return (
    <Container
      ref={ref}
      onCancel={onClose}
      onClick={(e) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <img src={imageSrc} alt="" />
    </Container>
  );
};

export default ImageModal;

const Container = styled.dialog`
  padding: unset;
  height: 90%;
  overflow: hidden;
  scroll-behavior: unset;
  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptopL} {
    height: 70%;
  }
  @media ${device.laptop} {
    height: 50%;
  }
  @media ${device.tablet} {
    height: 35%;
  }
  @media ${device.tabletS} {
    height: 25%;
  }
  @media ${device.mobileL} {
    height: 20%;
  }
`;
