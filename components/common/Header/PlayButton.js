import React from "react";
import { Link } from "react-router-dom";
import "./FeatureStyles.css";

function PlayButton({ onClick, children, ...restProps }) {
  return (
    <Link to={onClick} className="play-button" type="button" {...restProps}>
      {children}
    </Link>
  );
}

export default PlayButton;
