import React from "react";
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" href="/" src="./images/misc/Key-logo_White.webp" alt="Netflix logo" />
      </a>
    </div>
  );
}

export default Logo;
