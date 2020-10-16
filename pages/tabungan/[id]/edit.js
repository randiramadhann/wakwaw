import React, { useState } from "react";
import { Layout, Tabs, Button, Form, Input, Radio, Space, Modal, Row, Col } from "antd";
import fetch from "isomorphic-fetch";
import Head from "next/head";
import { useRouter } from 'next/router';

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function edit({ items }) {
  const [dataKpr, setDataKpr] = useState(items);
  const [value, setValue] = useState();
  const [form, setForm] = useState({target:items.data_kpr.target, setoran:items.data_kpr.setoran,terkumpul:items.data_kpr.terkumpul,metode:items.data_kpr.metode,tgl_pengajuan:items.data_kpr.tgl_pengajuan,tgl_approval:items.data_kpr.tgl_approval,tgl_selesai:items.data_kpr.tgl_selesai,status_kpr:items.data_kpr.status_kpr,tanggal_wawancara:items.data_kpr.tanggal_wawancara,waktu_wawancara:items.data_kpr.waktu_wawancara,tanggal_penyerahan:items.data_kpr.tanggal_penyerahan,waktu_penyerahan:items.data_kpr.waktu_penyerahan,pewawancara:items.data_kpr.pewawancara});
  const router = useRouter();
  const [visible, setVisible] = useState(false);

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

  // console.log(dataKpr);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue({
      value: e.target.value,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
}

  // const onFinish = (values) => {
  //   // console.log("Form:", values);
  //   // setForm(values)
  //   console.log({data_kpr:form});
  // };

  const onFinish = async () => {
    try {
        const res = await fetch(`https://zenia-f7c7.restdb.io/rest/kprzenia/${router.query.id}`, {
            method: 'PUT',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "x-apikey": "c2ac98aa4eb69e875192b5714d7df88996e06",
            },
            body: JSON.stringify({data_kpr:form})
        })
        router.reload();
    } catch (error) {
        console.log(error);
    }
}

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
                  <Form.Item
                    name="target"
                    label="Target"
                    labelAlign="left"
                    initialValue={form.target}
                  >
                    <Input name="target" onChange={handleChange} />
                  </Form.Item>
                  <Form.Item
                    name="setoran"
                    label="Setoran"
                    labelAlign="left"
                    initialValue={form.setoran}
                  >
                    <Input name="setoran" onChange={handleChange}  />
                  </Form.Item>
                  <Form.Item
                    name="terkumpul"
                    label="Terkumpul"
                    labelAlign="left"
                    initialValue={form.terkumpul}
                  >
                    <Input name="terkumpul" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item
                    name="frekuensi_setoran"
                    label="Frekuensi Setoran"
                    labelAlign="left"
                    initialValue={form.metode}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="metode_setoran"
                    label="Metode Setoran"
                    labelAlign="left"
                    initialValue={form.metode}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="judul_tabungan"
                    label="Judul Tabungan"
                    labelAlign="left"
                    initialValue={form.metode}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="tgl_dibuat"
                    label="Tanggal dibuat"
                    labelAlign="left"
                    initialValue={form.tgl_approval}
                  >
                    <Input type="date" name="tgl_approve" onChange={handleChange} />
                  </Form.Item>
                  <Form.Item
                    name="tgl_selesai"
                    label="Tanggal Selesai"
                    labelAlign="left"
                    initialValue={form.tgl_selesai}
                  >
                    <Input type="date" name="tgl_target" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item name="status" label="Status Tabungan" labelAlign="left">
                    <Radio.Group
                    name="status_kpr"
                      onChange={handleChange}
                      defaultValue={form.status_kpr}
                    >
                      <Radio value="pengajuan">Dihentikan</Radio>
                      <Radio value="aktif">Ditunda</Radio>
                      <Radio value="ditolak">Aktif</Radio>
                      <Radio value="selesai">Selesai</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="pewawancara"
                    label="Pewawancara"
                    labelAlign="left"
                    initialValue={form.waktu_wawancara}
                  >
                    <Input />
                  </Form.Item>
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
                        title="Please Confirm"
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <p>Apakah anda yakin melakukan perubahan dokumen</p>
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
    `https://zenia-f7c7.restdb.io/rest/kprzenia/${id}`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default edit;
