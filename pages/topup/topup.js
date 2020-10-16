import React, { useState } from "react";
import {
  Layout,
  Tabs,
  Button,
  Form,
  Row,
  Col,
  Input,
  Space,
  Modal,
  Select
} from "antd";
import fetch from "isomorphic-fetch";
import {DownOutlined} from "@ant-design/icons";

import styles from "../../styles/Layout.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function edit({ items }) {
  const [dataKpr, setDataKpr] = useState(items);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();

  console.log(dataKpr);

  //select
  

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
              <TabPane tab="Top Up" key="1">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="metodepembayaran"
                    label="Metode Pembayaran"
                    labelAlign="left"
                    // initialValue=
                  >
                    <div >
                      <select style={{width: 500, height: 32, fontWeight: "bold", border: "1px solid #CFCFCF", boxSizing: "border-box", borderRadius: "5px"}}
                        placeholder="add/select a value" onfocus="this.select()"
                        onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
                        <option value="one" >Tunai</option>
                        <option value="two" >Transfer Sesama Zenia</option>
                        <option value="three" >Transfer Antar Bank</option>
                      </select>
                     <input name="idValue" id="idValue" type="hidden"/>
                    </div>
                  </Form.Item>
                  <Form.Item
                    name="jumlah"
                    label="Jumlah"
                    labelAlign="left"
                    // initialValue=
                  >
                    <Input type="number"/>
                  </Form.Item>
                  <Form.Item
                    name="nomorrekening"
                    label="Nomor Rekening"
                    labelAlign="left"
                    // initialValue=
                  >
                    <Input type="number" style={{ fontWeight: "bold" }} />
                  </Form.Item>
                  <Form.Item>
                    <Space size="middle">
                      <Button
                        style={{
                          width: "80px",
                          background: "#3BA1FF",
                          borderColor: "#3BA1FF",
                          marginTop: "30px",
                        }}
                        onClick={showModal}
                      >
                        <p style={{ color: "#ffffff" }}>Proses</p>
                      </Button>
                      <Modal
                        title="Please Confirm"
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <p>Apakah anda yakin melakukan pengisian <span style={{fontWeight: "bold"}}>Saldo Rekening</span></p>
                        <Row>
                          <Col style={{marginRight: 20}}>
                            <p>Nasabah</p>
                            <p>No Rekening</p>
                            <p>Jumlah</p>
                          </Col>
                          <Col >
                            <p>Nasabah</p>
                            <p>No Rekening</p>
                            <p>Jumlah</p>
                          </Col>
                        </Row>
                      </Modal>
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
