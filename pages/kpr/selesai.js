import React, { useState } from "react";
import { Layout, Table, Tag, Button, Space, Input, Modal } from "antd";
import Link from "next/link";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import fetch from "isomorphic-fetch";
import Router from "next/router";
import Head from "next/head";

import styles from "../../styles/Layout.module.css";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;
const { confirm } = Modal;

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
    render: (value)=>{
      let color = "geekblue";
      if(value==="selesai"){
        color="#219653";
      }
      if(value==="ditolak"){
        color="#BDBDBD"
      }
      return (
          <Tag color={color} key={value} style={{ borderRadius: "20px" }}>
               {value}
          </Tag>
           );
    },
    // // render: (tags) => (
    // //   <>
    // //     {tags.map((tag) => {
    // //       let color = tag.length > 5 ? "geekblue" : "green";
    // //       if (tag === "selesai") {
    // //         color = "#219653";
    // //       }
    // //       if (tag === "ditolak") {
    // //         color = "#BDBDBD";
    // //       }
    // //       if (tag === "berhenti") {
    // //         color = "#EB5757";
    // //       }
    // //       return (
    // //         <Tag color={color} key={tag} style={{ borderRadius: "20px" }}>
    // //           {tag}
    // //         </Tag>
    // //       );
    // //     })}
    // //   </>
    // ),
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
    title: "Aksi",
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

function selesai({ items }) {
  const [dataSource, setDataSource] = useState(items);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [value, setValue] = useState("");

  //handle delete confirmation
  function showConfirm() {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        const noteId = selectedRowKeys;
        // DELETE request using fetch with async/await
        const requestOptions = {
          method: "DELETE",
          headers: {
            "cache-control": "no-cache",
            "x-apikey": "c2ac98aa4eb69e875192b5714d7df88996e06",
          },
        };
        try {
          const deleted = await fetch(
            `https://zenia-f7c7.restdb.io/rest/selesai/${noteId}`,
            requestOptions
          );
          Router.reload();
        } catch (error) {
          console.log(error);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

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
            KPR SELESAI
          </div>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              size="middle"
              onClick={showConfirm}
              style={{
                background: "#EB5757",
                borderColor: "#EB5757",
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
                placeholder="Cari"
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
    </>
  );
}

selesai.getInitialProps = async () => {
  // GET request using fetch with async/await
  const requestOptions = {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "c2ac98aa4eb69e875192b5714d7df88996e06",
    },
  };
  const data = await fetch(
    `https://zenia-f7c7.restdb.io/rest/kprzenia?q={"$or":[{"data_kpr":{"status_kpr":"ditolak"}},{"data_kpr":{"status_kpr":"selesai"}}]}`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default selesai;
