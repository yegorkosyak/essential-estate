import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

import Loader from "../../helpers/loader/Loader";

import { apiUrl } from "../../utils/apiUrl";
import { device } from "../../styles/utility/media-breakpoints.mjs";
import ImageModal from "./ImageModal";
import { useTranslation } from "react-i18next";

export default function Apartment() {
  const [apartment, setApartment] = useState();
  const [agent, setAgent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [modalImage, setModalImage] = useState();
  const { apartmentUUID } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/api/apartments?filters[uuid][$eq]=${apartmentUUID}&populate[0]=photos&populate[1]=agent&populate[2]=agent.photo&locale=${i18n.language}`
      )
      .then(({ data }) => {
        setApartment(data.data[0]);
        setAgent(data.data[0].attributes.agent.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);
  return (
    <ApartmentContainer>
      {isLoading && <Loader />}
      {apartment && apartment.attributes && (
        <>
          <HeroImage src={apartment.attributes.photos.data[0].attributes.url}>
            <HeroDatails>
              <StreetDetail>{apartment.attributes.location}</StreetDetail>
              <PriceLabel>{t(`Portfolio.Price`)}</PriceLabel>
              <PriceDetail>
                {apartment.attributes.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " zł"}
              </PriceDetail>
            </HeroDatails>
          </HeroImage>
          <DetailsGrid>
            <Cell>
              <CellName>{t(`Portfolio.Area`)}</CellName>
              <CellValue>{apartment.attributes.area}</CellValue>
            </Cell>
            <Cell>
              <CellName>{t(`Portfolio.Rooms`)}</CellName>
              <CellValue>{apartment.attributes.room}</CellValue>
            </Cell>
            <Cell>
              <CellName>{t(`Portfolio.Storey`)}</CellName>
              <CellValue>{apartment.attributes.storey}</CellValue>
            </Cell>
            <Cell>
              <CellName>{t(`Portfolio.Level`)}</CellName>
              <CellValue>{apartment.attributes.floor}</CellValue>
            </Cell>
            <Cell>
              <CellName>{t(`Portfolio.Parking`)}</CellName>
              <CellValue>
                {apartment.attributes.parking
                  ? t(`Portfolio.Yes`)
                  : t(`Portfolio.No`)}
              </CellValue>
            </Cell>
            <Cell>
              <CellName>{t(`Portfolio.Balcony`)}</CellName>
              <CellValue>
                {apartment.attributes.balcony
                  ? t(`Portfolio.Yes`)
                  : t(`Portfolio.No`)}
              </CellValue>
            </Cell>
          </DetailsGrid>
          <ImagesGrid>
            {apartment.attributes.photos.data.map((photo) => {
              return (
                <GridImage
                  key={photo.id}
                  src={photo.attributes.url}
                  alt="alt"
                  onClick={() => {
                    setModalImage(photo.attributes.url);
                    setModalIsOpened(true);
                  }}
                />
              );
            })}
          </ImagesGrid>
          <BottomDetails>
            <DetailWrap>
              <DetailTitle>{t(`Portfolio.Description`)}</DetailTitle>
              <br />
              <DescriptionContent>
                {apartment.attributes.description}
              </DescriptionContent>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>{t(`Portfolio.Responsible`)}</DetailTitle>
              {agent && (
                <AgentWrap>
                  <AgentPhoto
                    src={agent.attributes?.photo.data.attributes.url}
                    alt="Elizaveta"
                  />
                  <AgentDetails>
                    <AgentName>
                      {agent.attributes.first_name} {agent.attributes.last_name}
                    </AgentName>
                    <AgentInfo>
                      {agent.attributes.role}
                      <br />
                      {agent.attributes.phone_number}
                    </AgentInfo>
                  </AgentDetails>
                </AgentWrap>
              )}
            </DetailWrap>
          </BottomDetails>
        </>
      )}
      <ImageModal
        isOpened={modalIsOpened}
        onClose={() => setModalIsOpened(false)}
        imageSrc={modalImage}
      />
    </ApartmentContainer>
  );
}

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media ${device.laptopS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const Cell = styled.div`
  padding: 1.5rem;
  border: 1px solid white;
`;

const ApartmentContainer = styled.main``;

const HeroImage = styled.div`
  height: 85vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  @media ${device.mobileL} {
    height: 50vh;
  }
`;

const HeroDatails = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  z-index: 1;
  padding: 2rem;
  padding-top: 1rem;
  @media ${device.tablet} {
    bottom: 2rem;
    left: 2rem;
  }
  @media ${device.tabletS} {
    bottom: 1rem;
    left: 1rem;
  }
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }
`;

const StreetDetail = styled.h2`
  color: white;
  font-size: 2rem;
  @media ${device.tabletS} {
    font-size: 1.5rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const PriceLabel = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 2rem;
  margin-right: 2rem;
  @media ${device.tabletS} {
    font-size: 1.5rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const PriceDetail = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightXLight};
  font-size: 3rem;
  @media ${device.tabletS} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
`;

const CellName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 1.5rem;
`;
const CellValue = styled.p`
  margin: 0;
  color: ${(props) =>
    props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  font-size: 2rem;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  @media ${device.laptopS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BottomDetails = styled.div`
  display: flex;
  @media ${device.laptopS} {
    flex-direction: column;
  }
`;

const DetailWrap = styled.div`
  padding: 1.5rem;
  width: 50%;
  @media ${device.laptopS} {
    width: 90%;
    padding: 1rem;
  }
`;

const DetailTitle = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 2rem;
`;

const DescriptionContent = styled.p`
  color: ${(props) => props.theme.brandWhite};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightLight};
  line-height: 140%;
  /* column-count: 2;
  column-rule: 1px solid ${(props) => props.theme.brandGrey}; */
  /* @media ${device.tablet} {
    column-count: 1;
  } */
`;

const AgentWrap = styled.div`
  display: flex;
  align-items: end;
  @media ${device.tabletS} {
    align-items: center;
    flex-direction: column;
  }
`;

const AgentPhoto = styled.img`
  height: 100%;
  padding: 1rem;
  width: 300px;
`;

const AgentDetails = styled.div``;

const AgentName = styled.p`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
  @media ${device.tabletS} {
    font-size: 1.5rem;
  }
`;

const AgentInfo = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-size: 1.5rem;
  font-style: italic;
  @media ${device.tabletS} {
    font-size: 1rem;
  }
`;
