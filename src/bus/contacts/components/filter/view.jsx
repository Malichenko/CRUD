// Core
import React from "react";
import { Form, Input, Select, Checkbox, Button, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";

// Helpers
import { NATIONALITIES } from "../../../../constants/nationalities";

// Assets
import "./style.scss";

const { Option } = Select;

export const View = ({
  form,
  onReset,
  initialValues,
  onFilter,
  filterData,
  spinning,
}) => {
  let optionsJSX = [];
  for (const [key, value] of Object.entries(NATIONALITIES)) {
    optionsJSX.push(
      <Option key={key} value={key}>
        {value.name}
      </Option>,
    );
  }

  return (
    <div className="filter">
      <Form
        form={form}
        name="filter"
        onValuesChange={onFilter}
        initialValues={initialValues}>
        <Row justify="space-between" align="middle">
          <Col xs={24} md={20} lg={22}>
            <Row gutter={[16, 16]} justify="center" align="middle">
              <Col xs={24} lg={11}>
                <Form.Item name="name">
                  <Input.Search
                    type="name"
                    placeholder="Search by fullname"
                    disabled={!filterData}
                    loading={spinning}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={10} lg={4}>
                <Form.Item name="gender">
                  <Select placeholder="Gender" disabled={!filterData}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="indeterminate">Indeterminate</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={14} lg={5}>
                <Form.Item name="nat">
                  <Select
                    mode="multiple"
                    placeholder="Nationality"
                    disabled={!filterData}>
                    {optionsJSX}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={6} lg={4}>
                <Form.Item name="creator" valuePropName="checked">
                  <Checkbox value="creator" disabled={!filterData}>
                    I am creator
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col
            align="middle"
            xs={24}
            md={4}
            lg={2}
            style={{ alignSelf: "baseline" }}>
            <Form.Item>
              <Button
                type="link"
                icon={<CloseOutlined />}
                onClick={onReset}
                disabled={!form.isFieldsTouched()}>
                Clear
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
