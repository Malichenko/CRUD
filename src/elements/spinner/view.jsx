// Core
import React from "react";
import { Spin } from "antd";

// Assets
import "./styles.scss";

export const View = ({ size }) => {
  return (
    <span className="spinner">
      <Spin size={size} />
    </span>
  );
};
