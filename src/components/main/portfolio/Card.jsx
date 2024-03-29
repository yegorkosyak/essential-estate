import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "@helpers/slider/Slider";

export default function Card({
  images,
  title,
  area,
  price,
  level,
  room,
  transformed,
  onClick,
}) {
  const { t } = useTranslation();
  return (
    <CardContainer transformed={transformed}>
      {/* <CardImage src={image} alt="" /> */}
      <Slider slides={images} />
      <CardTitle transformed={transformed} onClick={onClick}>
        {title}
      </CardTitle>
      <CardTable onClick={onClick}>
        <TableBody>
          <TableRow>
            <TableCol transformed={transformed}>
              <CellName>{t("Portfolio.Area")}</CellName>
              <CellValue transformed={transformed}>{area}</CellValue>
            </TableCol>
            <TableCol transformed={transformed}>
              <CellName>{t("Portfolio.Price")}</CellName>
              <CellValue transformed={transformed}>
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " zł"}
              </CellValue>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol transformed={transformed}>
              <CellName>{t("Portfolio.Level")}</CellName>
              <CellValue transformed={transformed}>{level}</CellValue>
            </TableCol>
            <TableCol transformed={transformed}>
              <CellName>{t("Portfolio.Rooms")}</CellName>
              <CellValue transformed={transformed}>{room}</CellValue>
            </TableCol>
          </TableRow>
        </TableBody>
      </CardTable>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.transformed ? props.theme.brandWhite : props.theme.brandBlack};
  box-sizing: border-box;
  border-radius: 1vh;
`;

const CardTitle = styled.span`
  display: flex;
  align-items: center;
  min-height: 4rem;
  padding: 1rem;
  color: ${(props) =>
    props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 1.5rem;
  cursor: pointer;
`;

const CardTable = styled.table`
  width: 100%;
  cursor: pointer;
  border-spacing: 1rem;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCol = styled.td`
  padding: 10px;
  border: 1px solid
    ${(props) =>
      props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
  width: 50%;
`;

const CellName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 1.2rem;
`;
const CellValue = styled.p`
  margin: 0;
  color: ${(props) =>
    props.transformed ? props.theme.brandBlack : props.theme.brandWhite};
  font-size: 1.2rem;
`;
