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
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(false);
  const[modalOpen, setModalOpen] = useState(false);

  console.log(dataKpr);

  //modalfunction
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
              <TabPane tab="Data Nasabah" key="2">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="nama_nasabah"
                    label="Nama Nasabah"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.nama_nasabah}
                  >
                    <Input style={{fontWeight: "bold"}} />
                  </Form.Item>
                  <Form.Item
                    name="no_rek"
                    label="Nomor Rekening"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_rek}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="no_ktp"
                    label="Nomor KTP"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_ktp}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="ttl"
                    label="Tempat dan Tanggal Lahir"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.ttl}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="kelamin"
                    label="Jenis Kelamin"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.jenis_kelamin}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="pekerjaan"
                    label="Pekerjaan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.pekerjaan}
                  >
                    <Input style={{fontWeight: "bold"}} />
                  </Form.Item>
                  <Form.Item
                    name="pendidikan"
                    label="Pendidikan Terakhir"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.pendidikan_terakhir}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="status_kawin"
                    label="Status Perkawinan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.status_perkawinan}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="penghasilan"
                    label="Penghasilan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.penghasilan}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="kemampuan_cicil"
                    label="Kemampuan Cicil"
                    labelAlign="left"
                    initialValue=""
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="no_npwp"
                    label="Nomor NPWP"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.npwp}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="nama_ibu"
                    label="Noma Ibu"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.nama_ibu}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item
                    name="no_kk"
                    label="Nomor KK"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_kk}
                  >
                    <Input style={{fontWeight: "bold"}}/>
                  </Form.Item>
                  <Form.Item name="status" label="Status Akun" labelAlign="left">
                    <Radio.Group
                      onChange={onChange}
                      defaultValue={dataKpr.data_kpr.status_kpr}
                    >
                      <Radio value="verified">Non Verified</Radio>
                      <Radio value="nonverified">Verified</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <br/>
                  <Divider/>
                  <br/>
                  <Row>
                  <Col style={{ marginRight: "120px" }}>
                    <p>Foto KTP</p>
                    <p>Foto Selfie</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <a onClick={showModal}>rumah.jpeg</a>
                  </Col>
                  <Modal
                  id="1"
                  title="Foto Rumah"
                  visible={visible}
                  onUbah={handleOk}
                  onBatal={handleCancel}
                >
                  <img src={dataKpr.rumah_kpr.foto_rumah} width="300px" />
                </Modal>
                </Row>
                  <Form.Item>
                    <Space size="middle">
                      <Button
                        href={`/kpr/${dataKpr._id}/detail`}
                        style={{
                          width: "80px",
                          marginTop: "30px",
                        }}
                      >
                        Batal
                      </Button>
                      <Button
                        htmlType="submit"
                        type="primary"
                        style={{
                          width: "80px",
                          background: "#3BA1FF",
                          borderColor: "#3BA1FF",
                          marginTop: "30px",
                        }}
                        onClick={showModal}
                      >
                        Simpan
                      </Button>
                      <Modal
                        id="2"
                        title="Please Confirm"
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <p>Apakah anda yakin melakukan perubahan dokumen</p>
                      </Modal>
                    </Space>
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
