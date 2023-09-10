import styled from "styled-components";
import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { apiUrl } from "@utils/apiUrl";
import Loader from "@helpers/loader/Loader";

import PortfolioCard from "./PortfolioCard";
import FilterX from "./Filter";
import RangeFilter from "./RangeFilter";

import MountainsBG from "@assets/images/portfolio/mountains.png";

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [listing, setListing] = useState("all");
  const listingTypes = ["all", "rent", "sale"];

  const [estate, setEstate] = useState("all");
  const estateTypes = ["all", "flat", "house"];

  const [room, setRoom] = useState({
    from: "",
    to: "",
  });

  const [area, setArea] = useState({
    from: "",
    to: "",
  });

  const [floor, setFloor] = useState({
    from: "",
    to: "",
  });

  const [price, setPrice] = useState({
    from: "",
    to: "",
  });

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/api/apartments?${
          listing !== "all" ? "filters[listing_type][$eq]=" + listing + "&" : ""
        }${
          estate !== "all" ? "filters[estate_type][$eq]=" + estate + "&" : ""
        }${room.from !== "" ? "filters[room][$gte]=" + room.from + "&" : ""}${
          room.to !== "" ? "filters[room][$lte]=" + room.to + "&" : ""
        }${area.from !== "" ? "filters[area][$gte]=" + area.from + "&" : ""}${
          area.to !== "" ? "filters[area][$lte]=" + area.to + "&" : ""
        }${
          floor.from !== "" ? "filters[floor][$gte]=" + floor.from + "&" : ""
        }${floor.to !== "" ? "filters[floor][$lte]=" + floor.to + "&" : ""}${
          price.from !== "" ? "filters[price][$gte]=" + price.from + "&" : ""
        }${
          price.to !== "" ? "filters[price][$lte]=" + price.to + "&" : ""
        }populate=*`
      )
      .then(({ data }) => {
        setApartments(data.data);
        setIsLoading(false);
      });
  }, [listing, estate, room, area, floor, price]);
  return (
    <section>
      <HeroWrap>
        <img src={MountainsBG} alt="" />
        <h2>{t("PortfolioPage.title")}</h2>
      </HeroWrap>
      <Filters>
        <FilterX
          category={t("PortfolioPage.listingType")}
          value={listing}
          setValue={setListing}
          valueArray={listingTypes}
        />
        <FilterX
          category={t("PortfolioPage.estateType")}
          value={estate}
          setValue={setEstate}
          valueArray={estateTypes}
        />
        <RangeFilter
          category={t("PortfolioPage.numberOfRooms")}
          value={room}
          setValue={setRoom}
        />
        <RangeFilter
          category={t("PortfolioPage.area")}
          value={area}
          setValue={setArea}
        />
        <RangeFilter
          category={t("PortfolioPage.floor")}
          value={floor}
          setValue={setFloor}
        />
        <RangeFilter
          category={t("PortfolioPage.price")}
          value={price}
          setValue={setPrice}
        />
      </Filters>

      <div>
        {isLoading && <Loader />}
        <Found>
          {t("PortfolioPage.foundOffers")} {apartments.length}
        </Found>
        <Grid>
          {apartments.map(({ id, attributes }) => (
            <PortfolioCard
              key={id}
              photo={attributes.photos.data[0]}
              location={attributes.location}
              estateType={attributes.estate_type}
              area={attributes.area}
              price={attributes.price}
              floor={attributes.floor}
              room={attributes.room}
              updatedAt={attributes.updatedAt}
              onClick={() => navigate(`/apartments/${attributes.uuid}`)}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
}

const HeroWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  position: relative;

  & img {
    width: 100%;
  }

  & h2 {
    position: absolute;
    top: 2rem;
    left: 4rem;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
  }
`;

const Found = styled.h2`
  color: ${(props) => props.theme.brandWhite};
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 2rem;
`;
