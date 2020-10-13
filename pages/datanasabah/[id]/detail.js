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
              <TabPane tab="Data Nasabah" key="1">
                <Row>
                  <Col style={{ marginRight: "90px" }}>
                    <p>Nama Nasabah </p>
                    <p>Nomor Rekening</p>
                    <p>Nomor KTP</p>
                    <p>Nomor HP</p>
                    <p>Email </p>
                    <p>Tempat dan Tanggal Lahir</p>
                    <p>Alamat</p>
                    <p>Jenis Kelamin</p>
                    <p>Pekerjaan</p>
                    <p>Nomor NPWP</p>
                    <p>Status Akun</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>Rp {dataKpr.data_kpr.target}</p>
                    <p>Rp {dataKpr.data_kpr.setoran}</p>
                    <p>Rp {dataKpr.data_kpr.terkumpul}</p>
                    <p>{dataKpr.data_kpr.metode}</p>
                  </Col>
                </Row>
                <br/>
                <Divider />
                <Row>
                  <Col style={{ marginRight: "180px" }}>
                    <p>Foto KTP</p>
                    <p>Foto Selfie</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <a onClick={showModal}>rumah.jpeg</a>
                  </Col>
                  <Modal
                  title="Foto Rumah"
                  visible={visible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <img src={dataKpr.rumah_kpr.foto_rumah} width="300px" />
                </Modal>
                </Row>
                <Divider />
                <Button
                  href={`/datanasabah/${items._id}/edit`}
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
