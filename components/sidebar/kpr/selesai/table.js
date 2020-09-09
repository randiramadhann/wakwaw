import React from "react";
import { Table, Tag, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";

import users from "../../../../pages/api/selesai.json";

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
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "Selesai") {
            color = "#219653";
          }
          if (tag === "Ditolak") {
            color = "#BDBDBD";
          }
          if (tag === "Berhenti") {
            color = "#EB5757";
          }
          return (
            <Tag color={color} key={tag} style={{ borderRadius: "20px" }}>
              {tag}
            </Tag>
          );
        })}
      </>
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
        {" "}
        <a>Detail</a>{" "}
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
      </Space>
    ),
  },
];

class table extends React.Component {
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

    const showTotal = (total, range) => {
      return `${range[0]}-${range[1]} of ${total}`;
    };

    return (
      <div>
        <Table
          pagination={{
            position: ["bottomCenter"],
            showSizeChanger: true,
            pageSizeOptions: ["7", "10", "30", "50"],
            showTotal: showTotal,
          }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={users}
          rowKey={(row) => row.id}
        />
      </div>
    );
  }
}

export default table;
