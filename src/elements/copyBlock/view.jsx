// Core
import React from "react";
import { Typography } from "antd";

// Helpers
import { copyTextSubling } from "../../helpers/copyTextSubling";

// Assets
import "./styles.scss";

const { Paragraph } = Typography;

export const View = ({ type, data, table = false, value }) => {
  const tableJSX = table && "...";

  const linkJSX = type === "link" && (
    <div className="copyblock">
      <Paragraph copyable onClick={(el) => copyTextSubling(el)} />
      <a href={`${value}:${data}`}>{data}</a>{tableJSX}
    </div>
  );

  const adressJSX = type === "adress" && (
    <div className="copyblock">
      <Paragraph copyable onClick={(el) => copyTextSubling(el)} />
      <span>
        <strong>{data.country}</strong>
        <br />
        {data.adress}
      </span>
    </div>
  );

  return (
    <>
      {linkJSX}
      {adressJSX}
    </>
  );
};
