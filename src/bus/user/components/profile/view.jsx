// Core
import React from "react";
import { Typography } from "antd";

// Components
import { PersonCard } from "../../../share/components/personCard";

// Hooks
import { useProfile } from "../../hooks/useProfile/index";

// Assets
import "./styles.scss";

const { Title } = Typography;

export const View = () => {
  const { profile } = useProfile();

  const profileJSX = profile && <PersonCard data={profile} />;

  return (
    <div className="profile">
      <div className="profile__header">
        <Title level={2}>Profile</Title>
      </div>
      {profileJSX}
    </div>
  );
};
