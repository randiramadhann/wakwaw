import React from "react";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import { Table, Tag, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";

import users from "../../../../pages/api/pengajuan.json";

const columns = [
  {
    title: "Nama Nasabah",
    dataIndex: "nama_nasabah",
  },
  {
    title: "Nomor Rekening",
    dataIndex: "no_rek",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (value) => (
      <Tag style={{ borderRadius: "20px" }} color="#F2994A">
        {value}
      </Tag>
    ),
  },
  {
    title: "Target",
    dataIndex: "target",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Setoran",
    dataIndex: "setoran",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Terkumpul",
    dataIndex: "terkumpul",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link href={`/kpr/${record.id}/detail`}>
          <a>Detail</a>
        </Link>
        <Link href={`/kpr/${record.id}/edit`}>
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<EditOutlined />}
            style={{
              background: "#EFEFEF",
              borderColor: "#EFEFEF",
              color: "#333",
            }}
          />
        </Link>
      </Space>
    ),
  },
];

const HOST_NAME = process.env.HOST_NAME || "http://localhost:3000/";

export default class table extends React.Component {
  static async getInitialProps() {
    const data = await fetch(`${HOST_NAME}api/pengajuan`);
    const items = await data.json();
    return {
      items,
    };
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const { items } = this.props;
    console.log("items", items);
    return (
      <div>
        <Table
          pagination={{
            pageSize: 5,
            position: ["bottomCenter"],
          }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={items}
          rowKey={(row) => row.id}
        />
      </div>
    );
  }
}
