import React, { useState } from "react";
import { Layout, Tabs, Button, Form, Input, Radio, Space, Divider, Row, Col, Modal } from "antd";
import fetch from "isomorphic-fetch";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function edit({ items }) {
  const [dataKpr, setDataKpr] = useState(items);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();

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
                  <Form.Item
                    name="target"
                    label="Target"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.target}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="setoran"
                    label="Setoran"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.setoran}
                  >
                    <Input style={{fontWeight: "bold"}} />
                  </Form.Item>
                  <Form.Item
                    name="terkumpul"
                    label="Terkumpul"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.terkumpul}
                  >
                     <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="frekuensi_setoran"
                    label="Frekuensi Setoran"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.metode}
                  >
                    <Input style={{fontWeight: "bold"}} />
                  </Form.Item>
                  <Form.Item
                    name="metode_setoran"
                    label="Metode Setoran"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.metode}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="judul_tabungan"
                    label="Judul Tabungan"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_pengajuan}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="tanggal_dibuat"
                    label="Tanggal Dibuat"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_approval}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="tanggal_selesai"
                    label="Tanggal Selesai"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_selesai}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item name="status" label="Status Tabungan" labelAlign="left">
                    <Radio.Group
                      onChange={onChange}
                      defaultValue={dataKpr.data_kpr.status_kpr}
                    >
                      <Radio value="pengajuan">Dihentikan</Radio>
                      <Radio value="aktif">Tunda</Radio>
                      <Radio value="ditolak">Aktif</Radio>
                      <Radio value="selesai">Selesai</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="pewawancara"
                    label="Pewawancara"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.jadwal_wawancara}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Divider/>
                  <Row style={{ marginBottom: "20px" }}>
                  <Col  style={{ marginRight: "118px" }}>
                    <p>Foto Rumah</p>
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
                  <Form.Item>
                    <Space size="middle">
                      <Button
                        href={`/tabungan/${dataKpr._id}/detail`}
                        style={{
                          width: "80px",
                          marginTop: "30px",
                        }}
                      >
                        <p style={{ color: "#000000", fontWeight: "bold" }}>Batal</p>
                      </Button>
                      <Button
                        style={{
                          width: "80px",
                          background: "#3BA1FF",
                          borderColor: "#3BA1FF",
                          marginTop: "30px",
                        }}
                      >
                        <p style={{ color: "#FFFFFF", fontWeight: "bold" }} >Simpan</p>
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
