import { useTranslation } from "react-i18next";

import styled from "styled-components";
import moment from "moment/moment";

import Area from "@assets/icons/portfolio/area.png";
import Floor from "@assets/icons/portfolio/stairs.png";
import Room from "@assets/icons/portfolio/plot.png";
import Flat from "@assets/icons/portfolio/flat.png";
import House from "@assets/icons/portfolio/house.png";

export default function PortfolioCard({
  photo,
  location,
  estateType,
  area,
  price,
  floor,
  room,
  updatedAt,
  onClick,
}) {
  const { t } = useTranslation();
  return (
    <Card onClick={onClick}>
      <Photo content={photo.attributes.url} />
      <Content>
        <TopBlock>
          <TitleWrap>
            <EstateIcon src={estateType === "flat" ? Flat : House} />
            <Title>{location}</Title>
          </TitleWrap>
          <Price>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " zł"}
          </Price>
        </TopBlock>
        <BottomBlock>
          <Details>
            <Detail>
              <DetailIcon src={Area} />
              {area}
            </Detail>
            <Detail>
              <DetailIcon src={Floor} />
              {floor}
            </Detail>
            <Detail>
              <DetailIcon src={Room} />
              {room}
            </Detail>
          </Details>
          <UpdatedAt>
            {t("PortfolioPage.updatedAt")}

            {moment(updatedAt).format("DD/MM/yyyy")}
          </UpdatedAt>
        </BottomBlock>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  color: ${(props) => props.theme.brandWhite};
  padding: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.brandWhite};
    color: ${(props) => props.theme.brandBlack};
    transition: all 0.6s cubic-bezier(0, 0.55, 0.45, 1);
  }
`;

const Photo = styled.div`
  width: 500px;
  aspect-ratio: 16 / 9;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 1rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BottomBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  place-content: center;
  gap: 1rem;
`;

const EstateIcon = styled.img`
  width: 2rem;
  mix-blend-mode: difference;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

const Price = styled.span`
  font-size: 2rem;
`;

const Details = styled.div``;

const Detail = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
`;

const DetailIcon = styled.img`
  width: 2rem;
  mix-blend-mode: difference;
`;

const UpdatedAt = styled.span`
  place-self: flex-end;
`;
