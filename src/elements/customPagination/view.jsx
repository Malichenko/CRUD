// Core
import React from "react";
import { Pagination } from "antd";

// Styles
import "./styles.scss";

export const View = ({ totalPages, changeHandler, current }) => {
  return (
    <div className="pagination">
        <Pagination
          size="small"
          total={totalPages}
          defaultPageSize={9}
          current={current}
          pageSizeOptions={["9", "18", "36", "72"]}
          onChange={(page, size) => changeHandler(page, size)}
        />
      </div>
  );
};
