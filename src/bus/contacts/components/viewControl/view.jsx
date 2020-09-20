// Core
import React from "react";
import { Button, Tooltip } from "antd";
import {
  ReloadOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const ButtonGroup = Button.Group;

export const View = ({onReload, isLoading, viewMode, changeView}) => {

  const btnTabType = viewMode === "tabular" ? "primary" : "default";
  const btnTiledType = viewMode === "tiled" ? "primary" : "default";

  return (
    <div className="view-control">
      <Tooltip title="Update data">
        <Button
          type="dashed"
          shape="circle"
          icon={<ReloadOutlined />}
          onClick={onReload}
          loading={isLoading}
          style={{ marginRight: 10 }}></Button>
      </Tooltip>
      <ButtonGroup>
        <Tooltip title="Tiled view">
          <Button
            type={btnTiledType}
            id="tiled"
            icon={<AppstoreOutlined />}
            onClick={(el) => changeView(el)}
          />
        </Tooltip>
        <Tooltip title="Tabular view">
          <Button
            type={btnTabType}
            id="tabular"
            icon={<UnorderedListOutlined />}
            onClick={(el) => changeView(el)}
          />
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};
