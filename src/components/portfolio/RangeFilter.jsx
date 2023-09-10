import { useTranslation } from "react-i18next";

import styled from "styled-components";

export default function RangeFilter({ category, value, setValue }) {
  const { t } = useTranslation();
  return (
    <FilterContainer>
      <span>{category}</span>
      <FilterWrap>
        <FilterBox
          placeholder={t("PortfolioPage.from")}
          onChange={(e) => {
            setValue({ ...value, from: e.target.value });
          }}
        />
        <FilterBox
          placeholder={t("PortfolioPage.to")}
          onChange={(e) => {
            setValue({ ...value, to: e.target.value });
            console.log(e.target.value);
            console.log(typeof e.target.value);
          }}
        />
      </FilterWrap>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  color: white;

  & span {
  }
`;

const FilterBox = styled.input`
  border: 1px solid white;
  width: 6rem;
  margin: 1rem 0;
  padding: 0.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.brandWhite};
  background-color: ${(props) => props.theme.brandBlack};
`;

const FilterWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
