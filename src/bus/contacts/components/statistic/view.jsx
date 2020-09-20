// Core
import React from "react";
import { Row, Col, Typography, Statistic, Spin } from "antd";

// Helpers
import { NATIONALITIES } from "../../../../constants/nationalities";

// Assets
import "./styles.scss";

export const View = ({ data, isLoading }) => {
  const { Title, Text } = Typography;

  const maleNum = (data && data.filter((el) => el.gender === "male")) || 0;
  const femaleNum = (data && data.filter((el) => el.gender === "female")) || 0;
  const compare =
    data && data.length > 0
      ? maleNum > femaleNum
        ? "Men predominate"
        : "Women predominate"
      : "No data";

  const natJSX = (data, NATIONALITIES) => {
    let nat = {};
    data &&
      data.forEach((el) => {
        if (
          Object.keys(NATIONALITIES).includes(el.nat) &&
          !nat[NATIONALITIES[el.nat].name]
        ) {
          nat[NATIONALITIES[el.nat].name] = [];
        }
        nat[NATIONALITIES[el.nat].name].push(1);
      });

    let JSX = [];
    for (const [key, value] of Object.entries(nat)) {
      JSX.push(
        <Col key={key}>
          <strong>{key}</strong>:&nbsp;{`${value.length} contacts`}
        </Col>,
      );
    }

    return JSX;
  };

  return (
    <div className="statistic">
      <Spin spinning={isLoading}>
        <Title level={3}>Statistic</Title>
        <Row gutter={[18, 12]}>
          <Col>
            <Statistic
              title="Collection size"
              value={(data && data.length) || 0}
            />
          </Col>

          <Col>
            <Row>
              <Col>
                <Row gutter={16}>
                  <Col>
                    <Statistic
                      title="Males"
                      value={maleNum && maleNum.length}
                    />
                  </Col>
                  <Col>
                    <Statistic
                      title="Females"
                      value={femaleNum && femaleNum.length}
                    />
                  </Col>
                  <Col>
                    <Statistic title="Indeterminate" value={0} />
                  </Col>
                </Row>
              </Col>

              <Col xs={24}>
                <Text mark>{compare}</Text>
              </Col>
            </Row>
          </Col>

          <Col xs={24}>
            <p className="statistic__title">Nationalities</p>
            <Row gutter={[20, 20]}>{natJSX(data, NATIONALITIES)}</Row>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};
