// Core
import React from "react";

// Components
import { Routes } from "../../../../../routes";

// Assets
import "antd/dist/antd.css";
import "../../../../../assets/styles/index.scss";

const View = React.memo(() => {
  return <Routes />;
});

export { View };
