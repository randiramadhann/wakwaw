import React, { useState } from "react";
import { Layout, Table, Tag, Button, Space, Input, Modal } from "antd";
import Link from "next/link";
import { EditOutlined, DeleteOutlined, PlusOutlined  } from "@ant-design/icons";
import fetch from "isomorphic-fetch";
import Router from "next/router";

import styles from "../styles/Layout.module.css";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const { Content } = Layout;

const columns = [
  {
    title: "Posisi",
    dataIndex: ["data_nasabah", "nama_nasabah"],
    // render: (record) => record.form.name,
  },
  {
    title: "Nama Admin",
    dataIndex: ["data_nasabah", "no_rek"],
  },
  {
    title: "Email",
    dataIndex: ["data_nasabah", "no_rek"],
  },
  {
    title: "Nomor Handphone",
    dataIndex: ["data_nasabah", "no_rek"],
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link href={`/datanasabah/${record._id}/detail`}>
          <a>Detail</a>
        </Link>
        <Link href={`/datanasabah/${record._id}/edit`}>
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
            DATA ADMIN
          </div>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
             <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              size="middle"
              style={{
                background: "#3BA1FF",
                borderColor: "#3BA1FF",
              }}
            />
            <div
              style={{
                marginBottom: "16px",
                position: "relative",
                float: "right",
                zIndex: "10",
              }}
            >
              
              <Input
                placeholder="Search"
                value={value}
                onChange={(e) => {
                  const currValue = e.target.value;
                  setValue(currValue);
                  const filteredData = items.filter((entry) => {
                    return (
                      //search filter multiple input with OR operator
                      entry.data_nasabah.nama_nasabah
                        .toLowerCase()
                        .includes(currValue.toLowerCase()) ||
                      entry.data_nasabah.no_rek
                        .toLowerCase()
                        .includes(currValue.toLowerCase())
                    );
                  });
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
    `https://zenia-f7c7.restdb.io/rest/kprzenia`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default pengajuan;
