import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HeaderWrapper from "../common/Header/HeaderWrapper";
import NavBar from "../common/Header/NavBar";
import Logo from "../common/Header/Logo";
import FooterCompound from "../common/Footer/FooterCompound";
import SignFormWrapper from "../SignForm/SignFormWrapper";
import SignFormBase from "../SignForm/SignFormBase";
import SignFormTitle from "../SignForm/SignFormTitle";
import SignFormInput from "../SignForm/SignFormInput";
import SignFormButton from "../SignForm/SignFormButton";
import SignFormText from "../SignForm/SignFormText";
import SignFormLink from "../SignForm/SignFormLink";
import SignFormCaptcha from "../SignForm/SignFormCaptcha";
import SignFormError from "../SignForm/SignFormError";
import Warning from "../common/Header/Warning";
import { spaceHuntLogin } from "./redux/actions";

function SigninPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { redirect } = useSelector(state => state.login);

  if (redirect) history.push("/home");

  const IsInvalid = password === "" || emailAddress === "";

  const handleSubmit = (event) => {
    event.preventDefault();

dispatch(spaceHuntLogin({ email: emailAddress, password }));
  };
  return (
    <>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-signin">
          <Logo />
        </NavBar>
        <SignFormWrapper>
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <SignFormTitle>Sign In</SignFormTitle>
            {error ? <SignFormError>{error}</SignFormError> : null}
            <SignFormInput
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignFormButton disabled={IsInvalid}>Sign In</SignFormButton>
            <SignFormText>
              New to Netflix?
              <SignFormLink href="/signup">Sign up now.</SignFormLink>
            </SignFormText>
            <SignFormCaptcha>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderWrapper>
      <FooterCompound />
    </>
  );
}

export default SigninPage;
