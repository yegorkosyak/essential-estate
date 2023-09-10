import { useState } from "react";

import styled from "styled-components";
import FilterArrow from "@assets/filterarrow.png";

export default function FilterX({ category, value, setValue, valueArray }) {
  const [selectOpen, setSelectOpen] = useState(false);
  const fillValueList = (value = valueArray[0]) => {
    return valueArray.filter((elem) => elem !== value);
  };
  let [valueList, setValueList] = useState(fillValueList());
  return (
    <FilterContainer>
      <span>{category}</span>
      <FilterBox
        onClick={() => {
          setSelectOpen(!selectOpen);
        }}
      >
        <span>{value}</span>
        <img src={FilterArrow} alt="" />
        <FilterSelect selectOpen={selectOpen}>
          {valueList &&
            valueList.map((elem, idx) => {
              return (
                <Value
                  key={idx}
                  onClick={() => {
                    setValueList(fillValueList(elem));
                    setValue(elem);
                  }}
                >
                  {elem}
                </Value>
              );
            })}
        </FilterSelect>
      </FilterBox>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  color: white;

  & span {
  }
`;

const FilterBox = styled.div`
  border: 1px solid white;
  width: 6rem;
  margin: 1rem 0;
  padding: 0.5rem;
  text-transform: capitalize;

  position: relative;
  cursor: pointer;
  & img {
    float: right;
    width: 16px;
  }
`;

const FilterSelect = styled.div`
  display: ${(props) => (props.selectOpen === true ? "block" : "none")};
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 3;
`;

const Value = styled.div`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.brandWhite};
  background-color: ${(props) => props.theme.brandBlack};

  &:hover {
    opacity: 0.9;
  }
`;
