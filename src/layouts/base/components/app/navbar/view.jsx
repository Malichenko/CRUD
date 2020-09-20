// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import "./style.scss";

// Book
import { book } from "../../../../../routes/book";

const View = ({ profile }) => {
  const contactLinkJsx = profile && (
    <li className={"navbar__item"}>
      <NavLink
        exact={true}
        to={"/contacts"}
        className={"navbar__link"}
        activeClassName="is-active">
        Contacts
      </NavLink>
    </li>
  );

  return (
    <div className={"navbar"}>
      <ul className={"navbar__list"}>
        <li className={"navbar__item"}>
          <NavLink
            exact={true}
            to={book.home.url}
            className={"navbar__link"}
            activeClassName="is-active">
            {book.home.id}
          </NavLink>
        </li>
        {contactLinkJsx}
      </ul>
    </div>
  );
};

export { View };
