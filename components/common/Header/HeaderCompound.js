import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import NavBar from "./NavBar";
import Logo from "./Logo";
import SigninButton from "./SigninButton";
import FeatureWrapper from "./FeatureWrapper";
import FeatureTitle from "./FeatureTitle";
import Warning from "./Warning";

function HeaderCompound({ children }) {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          FOR A BETTER TOMMOROW GET THE BEST OF TODAY
        </FeatureTitle>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
