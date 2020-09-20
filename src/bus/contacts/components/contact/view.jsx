// Core
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Typography, Button } from "antd";
import { DoubleLeftOutlined } from '@ant-design/icons';

// Components
import { PersonCard } from "../../../share/components/personCard";

// Books
import { book } from "../../../../routes/book";

// Assets
import "./styles.scss";

const { Title } = Typography;

export const View = ({ contacts }) => {
  const { id } = useParams();
  const history = useHistory();

  const contact = contacts && contacts.find((el) => el.idx === +id);

  const contactJSX = contacts && <PersonCard data={contact && contact} />;

  return (
    <div className="contact">
      <div className="contact__header">
        <Title level={2}>Contact View</Title>
      </div>
      {contactJSX}
      <Button
        type="primary"
        onClick={() => history.push(book.contacts.url)}
        style={{ marginTop: 20 }}
        icon={<DoubleLeftOutlined />}
        >
        Back
      </Button>
    </div>
  );
};
