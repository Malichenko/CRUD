// Core
import React from "react";
import { Avatar } from "antd";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

// Book
import { book } from "../../../../routes/book";

// Hooks
import { useAvatar } from "../../hooks/useAvatar";


// Aseets
import "./styles.scss";

export const View = ({ profile }) => {
  const {logOut} = useAvatar();

  return (
    <div className="avatar">
      <div className="avatar__profile">
        {`Hello! ${profile.name.title}. ${profile.name.first} ${profile.name.last}`}
        <DownOutlined />
      </div>
      <div className="avatar__img">
        <Avatar size={46} src={`${profile.picture.medium}`} />
      </div>
      <ul className="avatar__dropdown">
        <li className="avatar__item">
          <NavLink exact={true} to={book.profile.url} className="avatar__link">
            <UserOutlined /> Profile
          </NavLink>
        </li>
        <div className="avatar__divider"></div>
        <li className="avatar__item" onClick={logOut}>
          <LogoutOutlined /> Logout
        </li>
      </ul>
    </div>
  );
};
