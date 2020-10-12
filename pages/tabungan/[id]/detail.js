import React, { useState } from "react";
import { Layout, Tabs, Button, Divider, Row, Col, Modal } from "antd";
import fetch from "isomorphic-fetch";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function detail({ items }) {
  const [dataKpr, setDataKpr] = useState(items);
  const [visible, setVisible] = useState(false);
  console.log(dataKpr);

  //handle modal
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
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
                <Row>
                  <Col style={{ marginRight: "90px" }}>
                    <p>Target </p>
                    <p>Setoran</p>
                    <p>Terkumpul</p>
                    <p>Frekuensi Setoran</p>
                    <p>Metode Setoran</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>Rp {dataKpr.data_kpr.target}</p>
                    <p>Rp {dataKpr.data_kpr.setoran}</p>
                    <p>Rp {dataKpr.data_kpr.terkumpul}</p>
                    <p>{dataKpr.data_kpr.metode}</p>
                    <p>{dataKpr.data_kpr.metode}</p>
                  </Col>
                </Row>
                <Divider />
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
                <Row>
                  <Col style={{ marginRight: "105px" }}>
                    <p>Judul tabungan</p>
                    <p>Tanggal dibuat</p>
                    <p>Tanggal selesai</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.data_kpr.status_kpr}</p>
                    <p>{dataKpr.data_kpr.jadwal_wawancara}</p>
                    <p>{dataKpr.data_kpr.pewawancara}</p>
                  </Col>
                </Row>
                <Divider/>
                <Row>
                  <Col style={{ marginRight: "90px" }}>
                    <p>Status Tabungan</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.data_kpr.status_kpr}</p>
                  </Col>
                </Row>
                <Divider/>
                <Row>
                    <p>Foto Rumah</p>
                </Row>
                <Button
                  href={`/tabungan/${items._id}/edit`}
                  type="primary"
                  style={{
                    width: "80px",
                    background: "#3BA1FF",
                    borderColor: "#3BA1FF",
                  }}
                >
                  Edit
                </Button>
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

detail.getInitialProps = async ({ query: { id } }) => {
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

export default detail;
