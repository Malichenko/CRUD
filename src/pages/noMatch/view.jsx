// Core
import React from "react";

// Components
import { LayoutBase } from "../../layouts";
import { ErrorPage } from "../../bus/share/components/404";

export const View = () => {

  return (
    <LayoutBase>
      <ErrorPage />
    </LayoutBase>
  );
};
