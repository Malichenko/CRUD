// Core
import React from "react";
import { useSelector } from "react-redux";

// Components
import { LayoutBase } from "../../layouts";
import { ErrorPage } from "../../bus/share/components/404";
import { Spinner } from "../../elements/spinner";
import { ProfileComonent } from "../../bus/user/components/profile";

// Hooks
import { useTimeout } from "../../bus/share/hooks/useTimeout";

export const View = () => {
  const { isTimeout } = useTimeout();
  const { profile, isLoading } = useSelector((state) => state.user);

  const contentJSX = profile && <ProfileComonent />;
  const errorPageJSX = !profile && !isLoading && isTimeout && <ErrorPage />;
  const spinnerJSX = isLoading && <Spinner size="large" />;

  return (
    <LayoutBase>
      {contentJSX}
      {spinnerJSX}
      {errorPageJSX}
    </LayoutBase>
  );
};
