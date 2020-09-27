import React from "react";
import { Layout, Tabs, Button, Divider, Row, Col, Modal } from "antd";
import fetch from "isomorphic-fetch";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

export default class detail extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const data = await fetch(
      `https://my-json-server.typicode.com/noerswork/newapi/users/${id}`
    );
    const item = await data.json();
    return item;
  }
  //handlemodal
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { id, nama_nasabah, no_rek, setoran, target, terkumpul } = this.props;
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
                      <p>Rp{target}</p>
                      <p>Rp{setoran}</p>
                      <p>Rp{terkumpul}</p>
                      <p>Auto Debet</p>
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
                      <p>12 Januari 2020</p>
                      <p>25 Januari 2020</p>
                      <p>25 Januari 2020</p>
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <Col style={{ marginRight: "120px" }}>
                      <p>Status KPR</p>
                    </Col>
                    <Col style={{ fontWeight: "bold" }}>
                      <p>Aktif</p>
                    </Col>
                  </Row>
                  <Button
                    href={`/kpr/${id}/edit`}
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
                      <p>Nomor NPWP </p>
                      <p>Nama Ibu </p>
                      <p>Nomor KK </p>{" "}
                    </Col>
                    <Col style={{ fontWeight: "bold" }}>
                      <p>{nama_nasabah}</p>
                      <p>{no_rek}</p>
                      <p>123</p>
                      <p>Yogyakarta, 28 Agustus 1995</p>
                      <p>Laki-Laki</p>
                      <p>Karyawan Swasta</p>
                      <p>S1</p>
                      <p>Belum Menikah</p>
                      <p>Rp 5.000.000</p>
                      <p>1234</p>
                      <p>Sri Nuryati</p>
                      <p>123</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Kontak" key="3">
                  <Row>
                    <Col style={{ marginRight: "20px" }}>
                      <p>Email </p>
                      <p>Nomor Handphone </p>
                      <p>Nomor Telephone Penjamin </p>
                      <p>Hubungan Penjamin </p>
                    </Col>
                    <Col style={{ fontWeight: "bold" }}>
                      <p> arianagrande@gmail.com</p>
                      <p>1234</p>
                      <p>1234</p>
                      <p>Ayah</p>
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
                      <p>Jl Mongisisidi</p>
                      <p>Jawa Timur</p>
                      <p>Ngawi</p>
                      <p>Ngawi</p>
                      <p>Pelem</p>
                      <p>0123</p>
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
                      <p>Jl. Mawar</p>
                      <p>Baru</p>
                      <p>GRIYA HUTAMA</p>
                      <p>-</p>
                      <p>123</p>
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <Col style={{ marginRight: "118px" }}>
                      <p>Foto Rumah</p>
                    </Col>
                    <Col>
                      <a onClick={this.showModal}>rumah.jpeg</a>
                    </Col>
                  </Row>
                  <Modal
                    title="Foto Rumah"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                      width="300px"
                    />
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
                      <p>ktp.jpeg</p>
                      <p>kk.pdf</p>
                      <p>rek.pdf</p>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
