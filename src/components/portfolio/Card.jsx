import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function Card({ image, title, area, price, level, room }) {
  const { t } = useTranslation();
  return (
    <CardContainer>
      <CardImage src={image} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardTable>
        <TableBody>
          <TableRow>
            <TableCol>
              <CellName>{t("Portfolio.Area")}</CellName>
              <CellValue>{area}</CellValue>
            </TableCol>
            <TableCol>
              <CellName>{t("Portfolio.Price")}</CellName>
              <CellValue>{price}</CellValue>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <CellName>{t("Portfolio.Level")}</CellName>
              <CellValue>{level}</CellValue>
            </TableCol>
            <TableCol>
              <CellName>{t("Portfolio.Rooms")}</CellName>
              <CellValue>{room}</CellValue>
            </TableCol>
          </TableRow>
        </TableBody>
      </CardTable>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.brandBlack};
  border: 5px solid ${(props) => props.theme.brandBlack};
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.p`
  margin-left: 10px;
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightXLight};
  font-size: 1.5rem;
`;

const CardTable = styled.table`
  width: 100%;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCol = styled.td`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.brandWhite};
  width: 50%;
`;

const CellName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.brandGrey};
  font-weight: ${(props) => props.theme.weightBold};
`;
const CellValue = styled.p`
  margin: 0;
  color: ${(props) => props.theme.brandWhite};
`;
