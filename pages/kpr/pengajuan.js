import React, { useState } from "react";
import { Layout, Table, Tag, Button, Space, Input, Modal } from "antd";
import Link from "next/link";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import fetch from "isomorphic-fetch";
import Router from "next/router";

import styles from "../../styles/Layout.module.css";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;

const columns = [
  {
    title: "Nama Nasabah",
    dataIndex: ["data_nasabah", "nama_nasabah"],
    // render: (record) => record.form.name,
  },
  {
    title: "Nomor Rekening",
    dataIndex: ["data_nasabah", "no_rek"],
  },
  {
    title: "Status",
    dataIndex: ["data_kpr", "status_kpr"],
    render: (value) => (
      <Tag style={{ borderRadius: "20px" }} color="#F2994A">
        {value}
      </Tag>
    ),
  },
  {
    title: "Target",
    dataIndex: ["data_kpr", "target"],
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Setoran",
    dataIndex: ["data_kpr", "setoran"],
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Terkumpul",
    dataIndex: ["data_kpr", "terkumpul"],
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link href={`/kpr/${record._id}/detail`}>
          <a>Detail</a>
        </Link>
        <Link href={`/kpr/${record._id}/edit`}>
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

function pengajuan({ items }) {
  const [dataSource, setDataSource] = useState(items);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [value, setValue] = useState("");

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              marginBottom: "24px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            KPR PENGAJUAN
          </div>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            <div
              style={{
                marginBottom: "16px",
                position: "relative",
                float: "right",
                zIndex: "10",
              }}
            >
              <Input
                placeholder="Search Name"
                value={value}
                onChange={(e) => {
                  const currValue = e.target.value;
                  setValue(currValue);
                  const filteredData = items.filter((entry) =>
                    entry.data_nasabah.nama_nasabah
                      .toLowerCase()
                      .includes(currValue)
                  );
                  setDataSource(filteredData);
                }}
              />
            </div>
            <Table
              pagination={{
                pageSize: 5,
                position: ["bottomCenter"],
              }}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              rowKey={(row) => row._id}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

pengajuan.getInitialProps = async () => {
  // GET request using fetch with async/await
  const requestOptions = {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "c2ac98aa4eb69e875192b5714d7df88996e06",
    },
  };
  const data = await fetch(
    `https://zenia-f7c7.restdb.io/rest/pengajuan`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default pengajuan;
