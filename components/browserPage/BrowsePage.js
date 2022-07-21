import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useContent from "../../custom-hooks/useContent";
import HeaderWrapper from "../common/Header/HeaderWrapper";
import NavBar from "../common/Header/NavBar";
import Logo from "../common/Header/Logo";
import FeatureWrapper from "../common/Header/FeatureWrapper";
import FeatureTitle from "../common/Header/FeatureTitle";
import FeatureSubTitle from "../common/Header/FeatureSubTitle";
import PlayButton from "../common/Header/PlayButton";
import HeaderLink from "../common/Header/HeaderLink";
import AllSlidesWrapper from "../Movies/AllSlidesWrapper";
import SlideWrapper from "../Movies/SlideWrapper";
import SlideTitle from "../Movies/SlideTitle";
import AllCardsWrapper from "../Movies/AllCardsWrapper";
import CardWrapper from "../Movies/CardWrapper";
import CardImage from "../Movies/CardImage";
import CardTitle from "../Movies/CardTitle";

import FooterCompound from "../common/Footer/FooterCompound";
import { getSchoolsList } from "./redux/actions";
import covertTobase64 from "../common/convertToBae64";

const BrowsePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.schools);

  useEffect(() => {
    dispatch(getSchoolsList());
    console.log(data)
  }, []);

 
  const seriess = [
    {
      title: "Documentaries",
      // data: data.filter((item) => item.genre === "documentaries"),
    },
    {
      title: "Comedies",
      // data: data.filter((item) => item.genre === "comedies"),
    },
    {
      title: "Children",
      // data: data.filter((item) => item.genre === "children"),
    },
    {
      title: "Crime",
      //  data: data.filter((item) => item.genre === "crime")
    },
    {
      title: "Feel-Good",
      // data: data.filter((item) => item.genre === "feel-good"),
    },
  ];

  // let { films } = useContent("films");
  // films = [
  //   { title: "Drama", data: films.filter((item) => item.genre === "drama") },
  //   {
  //     title: "Thriller",
  //     data: films.filter((item) => item.genre === "thriller"),
  //   },
  //   {
  //     title: "Children",
  //     data: films.filter((item) => item.genre === "children"),
  //   },
  //   {
  //     title: "Suspense",
  //     data: films.filter((item) => item.genre === "suspense"),
  //   },
  //   {
  //     title: "Romance",
  //     data: films.filter((item) => item.genre === "romance"),
  //   },
  // ];

  const [category, setCategory] = useState("films");
  // const currentCategory = category === "films" ? films : data;
  const [showCardFeature, setShowCardFeature] = useState(true);
  const [activeItem, setActiveItem] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      {/* <HeaderWrapper className="header-wrapper-browse">
        <NavBar className="navbar-browse">
          <Logo />
          <HeaderLink
            className={
              category === "films" ? "header-link-bold" : "header-link"
            }
            onClick={() => setCategory("films")}
          >
            Schools
          </HeaderLink>
          <HeaderLink
            className={
              category === "series" ? "header-link-bold" : "header-link"
            }
            onClick={() => setCategory("series")}
          >
            Colleges
          </HeaderLink>
        </NavBar>
        <FeatureWrapper>
          <FeatureTitle className="feature-title-browse">
            Book Your Seat
          </FeatureTitle>
          <FeatureSubTitle className="feature-subtitle-browse">
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks, the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he is part of the world
            around him.
          </FeatureSubTitle>
          <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
          {showPlayer ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <PlayerVideo src="./videos/video.mp4" type="video/mp4" />
            </PlayerOverlay>
          ) : null}
        </FeatureWrapper>
      </HeaderWrapper> */}

      <AllSlidesWrapper>
        {data?.map((slideItem) => (
          <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>
            {/* <SlideTitle>{slideItem.desc}</SlideTitle> */}
            {/* <p>{slideItem.location}</p>
            <p>{slideItem.ownership}</p> */}
            <AllCardsWrapper>
              <CardWrapper key={slideItem.title}>
                <CardImage
                  onClick={() => {
                    setShowCardFeature(true);
                    // setActiveItem(cardItem);
                  }}
                  src={`data:image/png;base64,${covertTobase64(
                    slideItem.img.data.data
                  )}`}
                />
                <CardTitle>{slideItem.title}</CardTitle>
                <PlayButton onClick={`/schools/${slideItem._id}`}>
                  View
                </PlayButton>
              </CardWrapper>
            </AllCardsWrapper>
           
          </SlideWrapper>
        ))}
      </AllSlidesWrapper>
      <FooterCompound />
    </>
  );
};

export default BrowsePage;
