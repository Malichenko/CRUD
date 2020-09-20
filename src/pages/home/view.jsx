// Core
import React from "react";

// Components
import { LayoutBase } from "../../layouts";

// Assets
import ReactLogo from "../../assets/images/react-logo.svg";

export const View = () => {
  
  return (
    <LayoutBase>
      <div className={"page page--home"}>
        <img className={"react-logo"} src={ReactLogo} alt="React Logo" />
      </div>
		</LayoutBase>
  );
};
