import React, { useState } from "react";
import { Layout, Tabs, Button, Divider, Row, Col, Modal } from "antd";
import fetch from "isomorphic-fetch";
import Head from "next/head";

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
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Data KPR" key="1">
                <Row>
                  <Col style={{ marginRight: "90px" }}>
                    <p>Target </p>
                    <p>Setoran</p>
                    <p>Terkumpul</p>
                    <p>Metode Setoran</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>Rp {dataKpr.data_kpr.target}</p>
                    <p>Rp {dataKpr.data_kpr.setoran}</p>
                    <p>Rp {dataKpr.data_kpr.terkumpul}</p>
                    <p>{dataKpr.data_kpr.metode}</p>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col style={{ marginRight: "45px" }}>
                    <p>Tanggal Pengajuan</p>
                    <p>Tanggal Approval Akhir</p>
                    <p>Tanggal Target Selesai</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.data_kpr.tgl_pengajuan}</p>
                    <p>{dataKpr.data_kpr.tgl_approval}</p>
                    <p>{dataKpr.data_kpr.tgl_selesai}</p>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col style={{ marginRight: "75px" }}>
                    <p>Status KPR</p>
                    <p>Jadwal Wawancara</p>
                    <p>Pewawancara</p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.data_kpr.status_kpr}</p>
                    <p>{dataKpr.data_kpr.jadwal_wawancara}</p>
                    <p>{dataKpr.data_kpr.pewawancara}</p>
                  </Col>
                </Row>
                <Button
                  href={`/kpr/${items._id}/edit`}
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
              <TabPane tab="Data Nasabah" key="2">
                <Row>
                  <Col style={{ marginRight: "30px" }}>
                    <p>Nama Nasabah </p>
                    <p>Nomor Rekening </p>
                    <p>Nomor KTP </p>
                    <p>Tempat dan Tanggal Lahir </p>
                    <p>Jenis Kelamin </p>
                    <p>Pekerjaan </p>
                    <p>Pendidikan Terakhir </p>
                    <p>Status Perkawinan </p>
                    <p>Penghasilan </p>
                    <p>Kemampuan Cicil</p>
                    <p>Nomor NPWP </p>
                    <p>Nama Ibu </p>
                    <p>Nomor KK </p>{" "}
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.data_nasabah.nama_nasabah}</p>
                    <p>{dataKpr.data_nasabah.no_rek}</p>
                    <p>{dataKpr.data_nasabah.no_ktp}</p>
                    <p>{dataKpr.data_nasabah.ttl}</p>
                    <p>{dataKpr.data_nasabah.jenis_kelamin}</p>
                    <p>{dataKpr.data_nasabah.pekerjaan}</p>
                    <p>{dataKpr.data_nasabah.pendidikan_terakhir}</p>
                    <p>{dataKpr.data_nasabah.status_perkawinan}</p>
                    <p>{dataKpr.data_nasabah.penghasilan}</p>
                    <p>0</p>
                    <p>{dataKpr.data_nasabah.npwp}</p>
                    <p>{dataKpr.data_nasabah.nama_ibu}</p>
                    <p>{dataKpr.data_nasabah.no_kk}</p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Kontak" key="3">
                <Row>
                  <Col style={{ marginRight: "20px" }}>
                    <p>Email </p>
                    <p>Nomor Handphone </p>
                    <p>Nomor Telp Penjamin </p>
                    <p>Hubungan Penjamin </p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.kontak.email}</p>
                    <p>{dataKpr.kontak.no_telp}</p>
                    <p>{dataKpr.kontak.no_penjamin}</p>
                    <p>{dataKpr.kontak.hub_penjamin}</p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Alamat" key="4">
                <Row>
                  <Col style={{ marginRight: "90px" }}>
                    <p>Alamat KTP </p>
                    <p>Provinsi </p>
                    <p>Kota/Kabupaten </p>
                    <p>Kecamatan </p>
                    <p>Kelurahan </p>
                    <p>Kode Pos </p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.alamat.alamat_ktp}</p>
                    <p>{dataKpr.alamat.provinsi}</p>
                    <p>{dataKpr.alamat.kota}</p>
                    <p>{dataKpr.alamat.kecamatan}</p>
                    <p>{dataKpr.alamat.kelurahan}</p>
                    <p>{dataKpr.alamat.kode_pos}</p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Rumah KPR" key="5">
                <Row>
                  <Col style={{ marginRight: "30px" }}>
                    <p>Alamat Rumah KPR </p>
                    <p>Kondisi Rumah </p>
                    <p>Pihak Penjual </p>
                    <p>Nama Penjual </p>
                    <p>Nomor Telephone Penjual </p>
                  </Col>
                  <Col style={{ fontWeight: "bold" }}>
                    <p>{dataKpr.rumah_kpr.alamat_rumah_kpr}</p>
                    <p>{dataKpr.rumah_kpr.kondisi_rumah}</p>
                    <p>{dataKpr.rumah_kpr.pihak_penjual}</p>
                    <p>{dataKpr.rumah_kpr.nama_penjual}</p>
                    <p>{dataKpr.rumah_kpr.no_penjual}</p>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col style={{ marginRight: "108px" }}>
                    <p>Foto Rumah</p>
                  </Col>
                  <Col>
                    <a onClick={showModal}>rumah.jpeg</a>
                  </Col>
                </Row>
                <Modal
                  title="Foto Rumah"
                  visible={visible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <img src={dataKpr.rumah_kpr.foto_rumah} width="300px" />
                </Modal>
              </TabPane>
              <TabPane tab="Dokumen" key="6">
                <Row>
                  <Col style={{ marginRight: "70px" }}>
                    <p>File KTP</p>
                    <p>File Kartu Keluarga</p>
                    <p>File Rekening Koran</p>
                  </Col>
                  <Col>
                    <p>
                      <a>{dataKpr.dokumen.file_ktp}</a>
                    </p>
                    <p>
                      <a>{dataKpr.dokumen.file_kk}</a>
                    </p>
                    <p>
                      <a>{dataKpr.dokumen.file_koran}</a>
                    </p>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
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
    `https://zenia-f7c7.restdb.io/rest/kprzenia/${id}`,
    requestOptions
  );
  const items = await data.json();
  return {
    items,
  };
};

export default detail;
