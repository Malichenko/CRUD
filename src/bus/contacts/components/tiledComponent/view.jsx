// Core
import React, { useMemo } from "react";
import { Card, Col, Row, Divider, Tag, Typography, Empty } from "antd";
import { Link } from "react-router-dom";

// Components
import { CopyBlock } from "../../../../elements/copyBlock";

// Helpers
import { NATIONALITIES } from "../../../../constants/nationalities";

const { Text } = Typography;

export const View = ({ filterData, pagination }) => {
  const memoCards = useMemo(
    () =>
      filterData &&
      filterData.slice(pagination.min, pagination.max).map((el) => {
        return (
          <Col xs={24} sm={12} lg={8} key={el.login.uuid}>
            <Card
              hoverable
              cover={
                <Link exact="true" to={`/contacts/${el.idx}`}>
                  <img
                    alt="example"
                    src={el.picture.large}
                    style={{
                      width: "100%",
                      maxHeight: 240,
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Link>
              }
              style={{ marginBottom: 20 }}>
              <Link
                exact="true"
                to={`/contacts/${el.idx}`}
                style={{ fontSize: 16, fontWeight: 500 }}>
                <span>{`${el.name.title}. ${el.name.first} ${el.name.last}`}</span>
                &nbsp;
                <Text type="secondary">
                  <small>{`(${el.dob.age} years)`}</small>
                </Text>
              </Link>
              <Divider dashed />
              <CopyBlock type="link" value="mailto" data={el.email} />
              <CopyBlock type="link" value="tel" data={el.cell} />
              <div style={{ height: 70 }}>
                <CopyBlock
                  type="adress"
                  data={{
                    country: `/${el.location.country}/`,
                    adress: `${el.location.street.number} ${el.location.street.name}, ${el.location.city}, ${el.location.state} ${el.location.postcode}`,
                  }}
                />
              </div>
              <Divider dashed />
              <Tag color={NATIONALITIES[el.nat].color}>
                {NATIONALITIES[el.nat].name}
              </Tag>
            </Card>
          </Col>
        );
      }),
    [filterData, pagination.min, pagination.max],
  );

  const contentJSX = !filterData ? (
    <Empty />
  ) : (
    <Row gutter={16}>{memoCards}</Row>
  );

  return <div className="tile">{contentJSX}</div>;
};
