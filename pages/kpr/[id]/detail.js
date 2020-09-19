import React from "react";
import { Layout, Tabs, Button, Divider } from "antd";
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
                  <p>
                    Target{" "}
                    <span style={{ fontWeight: "bold" }}>Rp{target}</span>
                  </p>
                  <p>
                    Setoran{" "}
                    <span style={{ fontWeight: "bold" }}>Rp{setoran}</span>
                  </p>
                  <p>
                    Terkumpul{" "}
                    <span style={{ fontWeight: "bold" }}>Rp{terkumpul}</span>
                  </p>
                  <p>
                    Metode Setoran{" "}
                    <span style={{ fontWeight: "bold" }}>Auto Debet</span>
                  </p>
                  <Divider />
                  <p>
                    Tanggal Pengajuan{" "}
                    <span style={{ fontWeight: "bold" }}>12 Januari 2020</span>
                  </p>
                  <p>
                    Tanggal Approval Akhir{" "}
                    <span style={{ fontWeight: "bold" }}>25 Januari 2020</span>
                  </p>
                  <p>
                    Tanggal Target Selesai{" "}
                    <span style={{ fontWeight: "bold" }}>25 Januari 2020</span>
                  </p>
                  <Divider />
                  <p>
                    Status KPR <span style={{ fontWeight: "bold" }}>Aktif</span>
                  </p>
                  <Button
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
                  <p>
                    Nama Nasabah{" "}
                    <span style={{ fontWeight: "bold" }}>{nama_nasabah}</span>
                  </p>
                  <p>
                    Nomor Rekening{" "}
                    <span style={{ fontWeight: "bold" }}>{no_rek}</span>
                  </p>
                  <p>
                    Nomor KTP <span style={{ fontWeight: "bold" }}>123</span>
                  </p>
                  <p>
                    Tempat dan Tanggal Lahir{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Yogyakarta, 28 Agustus 1995
                    </span>
                  </p>
                  <p>
                    Jenis Kelamin{" "}
                    <span style={{ fontWeight: "bold" }}>Laki-Laki</span>
                  </p>
                  <p>
                    Pekerjaan{" "}
                    <span style={{ fontWeight: "bold" }}>Karyawan Swasta</span>
                  </p>
                  <p>
                    Pendidikan Terakhir{" "}
                    <span style={{ fontWeight: "bold" }}>S1</span>
                  </p>
                  <p>
                    Status Perkawinan{" "}
                    <span style={{ fontWeight: "bold" }}>Belum Menikah</span>
                  </p>
                  <p>
                    Penghasilan{" "}
                    <span style={{ fontWeight: "bold" }}>Rp 5.000.000</span>
                  </p>
                  <p>
                    Nomor NPWP <span style={{ fontWeight: "bold" }}>1234</span>
                  </p>
                  <p>
                    Nama Ibu{" "}
                    <span style={{ fontWeight: "bold" }}>Sri Nuryati</span>
                  </p>
                  <p>
                    Nomor KK <span style={{ fontWeight: "bold" }}>123</span>
                  </p>
                  <Button
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
                <TabPane tab="Kontak" key="3">
                  <p>
                    Email{" "}
                    <span style={{ fontWeight: "bold" }}>
                      arianagrande@gmail.com
                    </span>
                  </p>
                  <p>
                    Nomor Handphone{" "}
                    <span style={{ fontWeight: "bold" }}>1234</span>
                  </p>
                  <p>
                    Nomor Telephone Penjamin{" "}
                    <span style={{ fontWeight: "bold" }}>1234</span>
                  </p>
                  <p>
                    Hubungan Penjamin{" "}
                    <span style={{ fontWeight: "bold" }}>Ayah</span>
                  </p>
                  <Button
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
                <TabPane tab="Alamat" key="4">
                  <p>
                    Alamat KTP{" "}
                    <span style={{ fontWeight: "bold" }}>Jl Mongisisidi</span>
                  </p>
                  <p>
                    Provinsi{" "}
                    <span style={{ fontWeight: "bold" }}>Jawa Timur</span>
                  </p>
                  <p>
                    Kota/Kabupaten{" "}
                    <span style={{ fontWeight: "bold" }}>Ngawi</span>
                  </p>
                  <p>
                    Kecamatan <span style={{ fontWeight: "bold" }}>Ngawi</span>
                  </p>
                  <p>
                    Kelurahan <span style={{ fontWeight: "bold" }}>Pelem</span>
                  </p>
                  <p>
                    Kode Pos <span style={{ fontWeight: "bold" }}>0123</span>
                  </p>
                  <Button
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
                <TabPane tab="Rumah KPR" key="5">
                  <p>
                    Alamat Rumah KPR{" "}
                    <span style={{ fontWeight: "bold" }}>Jl. Mawar</span>
                  </p>
                  <p>
                    Kondisi Rumah{" "}
                    <span style={{ fontWeight: "bold" }}>Baru</span>
                  </p>
                  <p>
                    Pihak Penjual{" "}
                    <span style={{ fontWeight: "bold" }}>GRIYA HUTAMA</span>
                  </p>
                  <p>
                    Nama Penjual <span style={{ fontWeight: "bold" }}>-</span>
                  </p>
                  <p>
                    Nomor Telephone Penjual{" "}
                    <span style={{ fontWeight: "bold" }}>123</span>
                  </p>
                  <Divider />
                  <p>
                    Foto Rumah{" "}
                    <span style={{ fontStyle: "italic", color: "#3BA1FF" }}>
                      foto.jpg
                    </span>
                  </p>
                  <Button
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
                <TabPane tab="Dokumen" key="6">
                  <p>
                    File KTP{" "}
                    <span style={{ fontStyle: "italic", color: "#3BA1FF" }}>
                      ktp.pdf
                    </span>
                  </p>
                  <p>
                    File Kartu Keluarga{" "}
                    <span style={{ fontStyle: "italic", color: "#3BA1FF" }}>
                      kk.pdf
                    </span>
                  </p>
                  <p>
                    File Rekening Koran{" "}
                    <span style={{ fontStyle: "italic", color: "#3BA1FF" }}>
                      rek.pdf
                    </span>
                  </p>
                  <Button
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
}
