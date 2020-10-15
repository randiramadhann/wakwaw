import React, { useState } from "react";
import { Layout, Table, Tag, Button, Space, Input, Modal } from "antd";
import Link from "next/link";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import fetch from "isomorphic-fetch";
import Router from "next/router";
import Head from "next/head";
import cookies from 'nookies'
import axios from 'axios'

import styles from "../../styles/Layout.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;

const columns = [
  {
    title: "Nama Nasabah",
    dataIndex: "account_name",
    // render: (record) => record.account_name,
  },
  {
    title: "Nomor Rekening",
    dataIndex: ["data_nasabah", "no_rek"],
  },
  {
    title: "Status",
    dataIndex: ["data_kpr", "status_kpr"],
    render: (value) => (
      <Tag style={{ borderRadius: "20px" }} color="#2F80ED">
        {value}
      </Tag>
    ),
  },
  {
    title: "Target",
    dataIndex: "saving_plan_target",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Setoran",
    dataIndex: "saving_pla_deposit",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Terkumpul",
    dataIndex: "saving_plan_nominal",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link href={`/tabungan/${record.id}/detail`}>
          <a>Detail</a>
        </Link>
        <Link href={`/tabungan/${record.id}/edit`}>
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

function aktif({items}) {
  const [dataSource, setDataSource] = useState(items);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [value, setValue] = useState("");
  console.log(dataSource)
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };

  return (
    <>
    <Head>
        <title>ZENIA ADMIN</title>
        <link rel="icon" href="/logo.png" />
      </Head>
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
            TABUNGAN AKTIF
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
                placeholder="Search"
                value={value}
                onChange={(e) => {
                  const currValue = e.target.value;
                  setValue(currValue);
                  const filteredData = items.filter((entry) => {
                    return (
                      //search filter multiple input with OR operator
                      entry.account_name
                        .toLowerCase()
                        .includes(currValue) ||
                      entry.account_number
                        .toLowerCase()
                        .includes(currValue)
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
              rowKey={(row) => row.id}
            /> 
         </div> 
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

aktif.getInitialProps = async context => {
  //ambil token dari cookiesnya dulu
  const { token } = cookies.get(context);
  //await get pakai axios di return dalam bentuk items
  const response =await axios.get('http://157.245.62.77:8080/api/dashboard/savings', {
    headers: {
      "Authorization" : 'Bearer ' + token
    }})
    console.log("the response:", response.data)
    return{
      items: response.data.data
    }
};

export default aktif;
