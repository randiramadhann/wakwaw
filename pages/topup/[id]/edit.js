import React, { useState } from "react";
import { Layout, Tabs, Button, Form, Row, Col, Input, Divider, Space } from "antd";
import fetch from "isomorphic-fetch";
import Head from "next/head";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function edit({ items }) {
  const [dataKpr, setDataKpr] = useState(items);
  const [value, setValue] = useState();

  console.log(dataKpr);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue({
      value: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log("Form:", values);
  };
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
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
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Data Tabungan" key="1">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Row>
                    <Col style={{ marginRight: "105px" }}>
                      <p>Judul tabungan</p>
                      <p>Tanggal dibuat</p>
                      <p>Tanggal Selesai</p>
                    </Col>
                    <Col style={{ fontWeight: "bold" }}>
                      <p>{dataKpr.data_kpr.tgl_pengajuan}</p>
                      <p>{dataKpr.data_kpr.tgl_approval}</p>
                      <p>{dataKpr.data_kpr.tgl_selesai}</p>
                    </Col>
                  </Row>
                  <Divider />
                  <Form.Item
                    name="pewawancara"
                    label="Pewawancara"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.jadwal_wawancara}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Space size="middle">
                      <Button
                        href={`/topup/${dataKpr._id}/detail`}
                        style={{
                          width: "80px",
                          marginTop: "30px",
                        }}
                      >
                        Batal
                      </Button>
                      <Button
                        style={{
                          width: "80px",
                          background: "#3BA1FF",
                          borderColor: "#3BA1FF",
                          marginTop: "30px",
                        }}
                      >
                        Simpan
                      </Button>
                    </Space>{" "}
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

edit.getInitialProps = async ({ query: { id } }) => {
  // GET request using fetch with async/await
  const requestOptions = {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "c2ac98aa4eb69e875192b5714d7df88996e06",
    },
  };
  const data = await fetch(
    `https://zenia-f7c7.restdb.io/rest/pengajuan/${id}`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default edit;
