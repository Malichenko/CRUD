// Core
import React from "react";
import { Button, Col, Row } from "antd";
import { LoginOutlined, LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

// Components
import { Modal } from "../modal";
import { NavBar } from "../navbar";
import { Logo } from "../logo";
import { Avatar } from "../../../../../bus/user/components/avatar";

// Hooks
import { useModal } from "../../../hooks/useModal";

// Assets
import "./style.scss";

const View = () => {
  const { profile, isLoading } = useSelector((state) => state.user);
  const { handleOk, handleCancel, showModal, visible, onSubmit } = useModal();
  const antIcon = isLoading ? <LoadingOutlined style={{ fontSize: 16 }} spin /> : <LoginOutlined />;

  const loginJSX = !profile && (
    <>
      <Modal
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={visible}
        onSubmit={onSubmit}
      />
      <Button
        type={"link"}
        htmlType={"button"}
        icon={antIcon}
        onClick={showModal}>
        Sign In
      </Button>
    </>
  );

  const profileJSX = profile && !isLoading && <Avatar profile={profile} />;

  return (
    <div className={"header"}>
      <Row type={"flex"} gutter={36} align={"middle"}>
        <Col>
          <Logo />
        </Col>
        <Col className={"_flex-grow"}>
          <Row type={"flex"} gutter={16} align={"middle"}>
            <Col className={"_flex-grow"}>
              <NavBar profile={profile} />
            </Col>
            <Col>
              {loginJSX}
              {profileJSX}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export { View };
