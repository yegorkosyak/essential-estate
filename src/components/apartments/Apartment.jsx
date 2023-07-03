import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

import Loader from "../../helpers/loader/Loader";

export default function Apartment() {
  const [apartment, setApartment] = useState();
  const [agent, setAgent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { apartmentId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://strapi.essentialestate.link/api/apartments/${apartmentId}?populate=*`
      )
      .then(({ data }) => {
        console.log(data);
        setApartment(data.data);
      })
      .then(() => {
        axios
          .get(`https://strapi.essentialestate.link/api/agents/2?populate=*`)
          .then(({ data }) => {
            setAgent(data.data);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ApartmentContainer>
      {isLoading && <Loader />}
      {apartment && (
        <>
          <HeroImage
            src={`https://strapi.essentialestate.link${apartment.attributes.photos.data[0].attributes.url}`}
          >
            <HeroDatails>
              <StreetDetail>{apartment.attributes.location}</StreetDetail>
              <PriceLabel>price</PriceLabel>l
              <PriceDetail>
                {apartment.attributes.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " zł"}
              </PriceDetail>
            </HeroDatails>
          </HeroImage>
          <DetailsTable>
            <TableBody>
              <TableRow>
                <TableCol className="border-right border-bottom">
                  <CellName>Area</CellName>
                  <CellValue>{apartment.attributes.area}</CellValue>
                </TableCol>
                <TableCol className="border-bottom border-left">
                  <CellName>Estate type</CellName>
                  <CellValue>{apartment.attributes.listing_type}</CellValue>
                </TableCol>
              </TableRow>
              <TableRow>
                <TableCol className="border-top border-right">
                  <CellName>Level</CellName>
                  <CellValue>{apartment.attributes.floor}</CellValue>
                </TableCol>
                <TableCol className="border-left border-top">
                  <CellName>Rooms</CellName>
                  <CellValue>{apartment.attributes.room}</CellValue>
                </TableCol>
              </TableRow>
            </TableBody>
          </DetailsTable>
          <ImagesGrid>
            {apartment.attributes.photos.data.map((photo) => {
              return (
                <GridImage
                  key={photo.id}
                  src={`https://strapi.essentialestate.link${photo.attributes.url}`}
                  alt="alt"
                />
              );
            })}
          </ImagesGrid>
          <BottomDetails>
            <DetailWrap>
              <DetailTitle>Description</DetailTitle>
              <br />
              <DescriptionContent>
                For rent a modern and fully equipped apartment with an area of
                54m2, located at Przewóz Street. (two more similar ones
                available in this location). This luxurious apartment consists
                of 3 rooms, including an air-conditioned master bedroom, a
                living room with a kitchenette, a bathroom with a shower and a
                balcony. All rooms are equipped with designer furniture and LED
                lighting, ensuring a comfortable and modern lifestyle. The
                second room will be furnished by the owner according to the
                needs of the tenant.
                <hr />
                The apartment is located in a modern building with an elevator,
                large windows with acoustic glazing and central heating. In
                addition, it is possible to rent a parking space in the
                underground garage. The building is well insulated and energy
                efficient, ensuring comfort of living and savings on bills. The
                location of the apartment is very convenient, just a few minutes
                from tram lines 6, 11 and 20 and bus lines 123, 125, 221, 264
                and 425. There are shops, restaurants and parks nearby that
                ensure a comfortable lifestyle.
              </DescriptionContent>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>Responsible Agent</DetailTitle>
              {agent && (
                <AgentWrap>
                  <AgentPhoto
                    src={
                      "https://strapi.essentialestate.link" +
                      agent.attributes?.photo.data.attributes.url
                    }
                    alt="Elizaveta"
                  />
                  <AgentDetails>
                    <AgentName>Elizaveta</AgentName>
                    <AgentInfo>
                      Real estate advisor
                      <br />
                      +48 745 834 533
                    </AgentInfo>
                  </AgentDetails>
                </AgentWrap>
              )}
            </DetailWrap>
          </BottomDetails>
        </>
      )}
    </ApartmentContainer>
  );
}

const ApartmentContainer = styled.main``;

const HeroImage = styled.div`
  height: 85vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const HeroDatails = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  z-index: 1;
  padding: 2rem;
  padding-top: 1rem;
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
`;

const PriceLabel = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 2rem;
  margin-right: 2rem;
`;

const PriceDetail = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightXLight};
  font-size: 3rem;
`;

const DetailsTable = styled.table`
  width: 100%;
  border-spacing: unset;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCol = styled.td`
  padding: 1.5rem;
  width: 50%;
  &.border-right {
    border-right: 1px solid white;
  }
  &.border-bottom {
    border-bottom: 1px solid white;
  }
  &.border-left {
    border-left: 1px solid white;
  }
  &.border-top {
    border-top: 1px solid white;
  }
`;

const CellName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 2rem;
`;
const CellValue = styled.p`
  margin: 0;
  color: ${(props) =>
    props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  font-size: 2.5rem;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

const GridImage = styled.img`
  width: 100%;
`;

const BottomDetails = styled.div`
  display: flex;
`;

const DetailWrap = styled.div`
  padding: 1.5rem;
  width: 50%;
`;

const DetailTitle = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 2rem;
`;

const DescriptionContent = styled.span`
  color: ${(props) => props.theme.brandWhite};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightLight};
  line-height: 140%;
`;

const AgentWrap = styled.div`
  height: 90%;
  display: flex;
  align-items: end;
`;

const AgentPhoto = styled.img`
  height: 100%;
  margin-right: 1rem;
`;

const AgentDetails = styled.div``;

const AgentName = styled.p`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  margin-bottom: 0.5rem;
  font-size: 3rem;
`;

const AgentInfo = styled.span`
  color: ${(props) => props.theme.brandGrey};
  font-size: 2rem;
  font-style: italic;
`;
