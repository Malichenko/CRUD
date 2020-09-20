// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import WezomLogo from "../../../../../assets/images/wezom-logo.svg";
import "./style.scss";

// Book
import { book } from "../../../../../routes/book";

const View = React.memo(() => {
  return (
    <NavLink
      to={book.home.url}
      className={"logo"}
      activeClassName={"is-active"}
      exact={true}>
      <img className={"logo__img"} src={WezomLogo} alt={"Wezom"} />
    </NavLink>
  );
});

export { View };
