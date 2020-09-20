// Core
import React from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";

export const View = ({ handleOk, handleCancel, visible, onSubmit }) => {

  return (
    <>
      <Modal
        title="Sign in"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}>
        <Form
          name="normal_login"
          className="login-form form"
          initialValues={{ email: "", password: "" }}
          onFinish={onSubmit}
          size="large">
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "The email field is required.",
              },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "The password field is required." },
              {
                validator: (_, value) =>
                  value.length > 0 &&
                  value.length < 8 &&
                  value.match(/^[a-z0-9\-._]+$/gi)
                    ? Promise.reject(
                        "The password must be at least 8 characters.",
                      )
                    : Promise.resolve(),
              },
              () => ({
                validator(_, value) {
                  if (value.length > 0 && !value.match(/^[a-z0-9\-._]+$/gi)) {
                    return Promise.reject("The password field is invalid.");
                  }
                  return Promise.resolve();
                },
              }),
            ]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <div className="form__footer">
            <Row align="middle" className="_flex-nowrap">
              <Col span={18}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block>
                  Sign in
                </Button>
              </Col>
              <Col span={6}>
                <Button
                  danger
                  type="text"
                  size="small"
                  onClick={handleCancel}
                  block>
                  <CloseOutlined />
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Modal>
    </>
  );
};
