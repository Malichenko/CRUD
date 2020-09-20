// Core
import React from "react";
import { useSelector } from "react-redux";

// Components
import { LayoutBase } from "../../layouts";
import { ErrorPage } from "../../bus/share/components/404";
import { Spinner } from "../../elements/spinner";
import { Contact } from "../../bus/contacts/components/contact";

// Hooks
import { useContacts } from "../../bus/contacts/hooks/useContacts";
import { useTimeout } from "../../bus/share/hooks/useTimeout";

export const View = () => {
  const { isTimeout } = useTimeout();
  const { profile, isLoading } = useSelector((state) => state.user);
  const { contacts } = useContacts();
  
  const contentJSX = profile && <Contact contacts={contacts} />;
  const errorPageJSX = !profile && !isLoading && isTimeout && <ErrorPage />;
  const spinnerJSX = isLoading && <Spinner size="large" cx="spinner__full" />;

  return (
    <LayoutBase>
      {contentJSX}
      {spinnerJSX}
      {errorPageJSX}
    </LayoutBase>
  );
};
