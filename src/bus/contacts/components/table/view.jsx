// Core
import React from "react";
import { Table, Tag, Avatar } from "antd";
import { Link } from "react-router-dom";

// Components
import { CopyBlock } from "../../../../elements/copyBlock";

// Styles
import "./styles.scss";

// Helpers
import { NATIONALITIES } from "../../../../constants/nationalities";

export const View = ({ tableData }) => {
  const columns = [
    {
      key: "img",
      title: "Avatar",
      align: "center",
      dataIndex: "img",
      width: 80,
      render: (img) => (
        <div className="td-avatar">
          <Link exact="true" to={`/contacts/${img.id}`}>
            <Avatar size={40} src={img.path} />
          </Link>
        </div>
      ),
      fixed: "left",
    },
    {
      title: "Full name",
      dataIndex: "name",
      key: "name",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.name.title.localeCompare(b.name.title),
      render: (name) => (
        <Link exact="true" to={`/contacts/${name.id}`}>
          {name.title}
        </Link>
      ),
      onHeaderCell: (column) => {
        return {
          onClick: () => {
            console.log(column);
          }
        };
      }
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: 250,
      render: (birthday) => (
        <>
          {birthday.map((el, idx) => (
            <span key={String(idx)} className="td-birthday">
              {el}
            </span>
          ))}
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
      render: (email) => (
        <div className="table__email">
          <CopyBlock type="link" value="mailto" data={email} table={true} />
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "tel",
      key: "tel",
      render: (tel) => <CopyBlock type="link" value="tel" data={tel} />,
    },
    {
      title: "Location",
      dataIndex: "adress",
      key: "adress",
      width: 250,
      render: (adress) => <CopyBlock type="adress" data={adress} />,
    },
    {
      title: "Nationality",
      dataIndex: "tag",
      key: "tag",
      align: "center",
      render: (tag) => (
        <Tag color={NATIONALITIES[tag].color} key={NATIONALITIES[tag].name}>
          {NATIONALITIES[tag].name}
        </Tag>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={tableData}
        columns={columns}
        className="table"
        pagination={false}
        scroll={{ x: 1300 }}
      />
    </>
  );
};
