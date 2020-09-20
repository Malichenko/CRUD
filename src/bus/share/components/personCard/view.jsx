// Core
import React from "react";
import { Typography, Row, Col, Avatar, Divider, Tag } from "antd";

// Components
import { CopyBlock } from "../../../../elements/copyBlock";

// Helpers
import { NATIONALITIES } from "../../../../constants/nationalities";

const { Title, Text } = Typography;

export const View = ({ data }) => {
  return (
    <Row justify="center" gutter={[20, 20]}>
      <Col>
        <Avatar size={260} shape="square" src={data.picture.large} />
      </Col>
      <Col xs={20} md={12}>
        <Title level={3}>
          <span>{`${data.name.title}. ${data.name.first} ${data.name.last}`}</span>
          &nbsp;
          <Text type="secondary">
            <small>{`(${data.dob.age} years)`}</small>
          </Text>
        </Title>
        <Divider dashed />
        <CopyBlock type="link" value="mailto" data={data.email} />
        <CopyBlock type="link" value="tel" data={data.cell} />
        <CopyBlock
          type="adress"
          data={{
            country: `/${data.location.country}/`,
            adress: `${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}`,
          }}
        />
        <Divider dashed />
        <Tag color={NATIONALITIES[data.nat].color}>
          {NATIONALITIES[data.nat].name}
        </Tag>
      </Col>
    </Row>
  );
};
