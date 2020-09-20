// Core
import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

// Book
import { book } from "../../../../routes/book";

// Assets
import "./styles.scss";

export const View = () => {
  const history = useHistory();
  
  const redirect = () => {
    history.push(book.home.url);
  };

  return (
    <div className="error">
      <div className="error__code">404</div>
      <div className="error__message">Requested page not found!</div>
      <div className="error__back-btn">
        <Button size="large" type="primary" onClick={redirect}>
          Back to home
        </Button>
      </div>
    </div>
  );
};
