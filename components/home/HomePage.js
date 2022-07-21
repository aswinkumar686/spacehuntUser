import React from "react";
import HeaderCompound from "../common/Header/HeaderCompound";
import OptFormCompound from "../../compounds/OptFormCompound";
import JumboCompound from "../../compounds/JumboCompound";
import Seperator from "../Seperator/Seperator";
import AccordionCompound from "../../compounds/AccordionCompound";
import FooterCompound from "../common/Footer/FooterCompound";

function HomePage() {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default HomePage;
