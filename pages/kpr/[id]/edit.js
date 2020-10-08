import React, { useState } from "react";
import { Layout, Tabs, Button, Form, Input, Radio, Space } from "antd";
import fetch from "isomorphic-fetch";

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
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="setoran"
                    label="Setoran"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.setoran}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="terkumpul"
                    label="Terkumpul"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.terkumpul}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="metode_setoran"
                    label="Metode Setoran"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.metode}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="tgl_pengajuan"
                    label="Tanggal Pengajuan"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_pengajuan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="tgl_approve"
                    label="Tanggal Approval"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_approval}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="tgl_target"
                    label="Tanggal Target Selesai"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.tgl_selesai}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="status" label="Status KPR" labelAlign="left">
                    <Radio.Group
                      onChange={onChange}
                      defaultValue={dataKpr.data_kpr.status_kpr}
                    >
                      <Radio value="pengajuan">Pengajuan</Radio>
                      <Radio value="aktif">Aktif</Radio>
                      <Radio value="ditolak">Ditolak</Radio>
                      <Radio value="selesai">Selesai</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="tgl_wawancara"
                    label="Tanggal Wawancara"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.jadwal_wawancara}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="waktu_wawancara"
                    label="Waktu Wawancara"
                    labelAlign="left"
                    initialValue=""
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="pewawancara"
                    label="Pewawancara"
                    labelAlign="left"
                    initialValue={dataKpr.data_kpr.pewawancara}
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
                      >
                        Simpan
                      </Button>
                    </Space>{" "}
                  </Form.Item>
                </Form>
              </TabPane>
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
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_rek"
                    label="Nomor Rekening"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_rek}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_ktp"
                    label="Nomor KTP"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_ktp}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="ttl"
                    label="Tempat dan Tanggal Lahir"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.ttl}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kelamin"
                    label="Jenis Kelamin"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.jenis_kelamin}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="pekerjaan"
                    label="Pekerjaan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.pekerjaan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="pendidikan"
                    label="Pendidikan Terakhir"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.pendidikan_terakhir}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="status_kawin"
                    label="Status Perkawinan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.status_perkawinan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="penghasilan"
                    label="Penghasilan"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.penghasilan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kemampuan_cicil"
                    label="Kemampuan Cicil"
                    labelAlign="left"
                    initialValue=""
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_npwp"
                    label="Nomor NPWP"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.npwp}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="nama_ibu"
                    label="Noma Ibu"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.nama_ibu}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_kk"
                    label="Nomor KK"
                    labelAlign="left"
                    initialValue={dataKpr.data_nasabah.no_kk}
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
                      >
                        Simpan
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Kontak" key="3">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    labelAlign="left"
                    initialValue={dataKpr.kontak.email}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_hp"
                    label="Nomor Handphone"
                    labelAlign="left"
                    initialValue={dataKpr.kontak.no_telp}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="no_penjamin"
                    label="Nomor Telp Penjamin"
                    labelAlign="left"
                    initialValue={dataKpr.kontak.no_penjamin}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="hub_penjamin"
                    label="Hubungan Penjamin"
                    labelAlign="left"
                    initialValue={dataKpr.kontak.hub_penjamin}
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
                      >
                        Simpan
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Alamat" key="4">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="alamat_ktp"
                    label="Alamat KTP"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.alamat_ktp}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="provinsi"
                    label="Provinsi"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.provinsi}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kabupaten"
                    label="Kota/Kabupaten"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.kota}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kecamatan"
                    label="Kecamatan"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.kecamatan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kelurahan"
                    label="Kelurahan"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.kelurahan}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kodepos"
                    label="Kode Pos"
                    labelAlign="left"
                    initialValue={dataKpr.alamat.kode_pos}
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
                      >
                        Simpan
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Rumah KPR" key="5">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="alamat_kpr"
                    label="Alamat Rumah KPR"
                    labelAlign="left"
                    initialValue={dataKpr.rumah_kpr.alamat_rumah_kpr}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="kondisi"
                    label="Kondisi Rumah"
                    labelAlign="left"
                    initialValue={dataKpr.rumah_kpr.kondisi_rumah}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="penjual"
                    label="Pihak Penjual"
                    labelAlign="left"
                    initialValue={dataKpr.rumah_kpr.pihak_penjual}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="nama_penjual"
                    label="Nama Penjual"
                    labelAlign="left"
                    initialValue={dataKpr.rumah_kpr.nama_penjual}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="telp_penjual"
                    label="Nomor Telephone Penjual"
                    labelAlign="left"
                    initialValue={dataKpr.rumah_kpr.no_penjual}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="foto_rumah"
                    label="Foto Rumah"
                    labelAlign="left"
                  >
                    <a>rumah.jpeg</a>
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
                      >
                        Simpan
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Dokumen" key="6">
                <Form
                  {...layout}
                  style={{ width: "750px" }}
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                >
                  <Form.Item name="file_ktp" label="File KTP" labelAlign="left">
                    <a>{dataKpr.dokumen.file_ktp}</a>
                  </Form.Item>
                  <Form.Item
                    name="file_kk"
                    label="File Kartu Keluarga"
                    labelAlign="left"
                  >
                    <a>{dataKpr.dokumen.file_kk}</a>
                  </Form.Item>
                  <Form.Item
                    name="file_rek"
                    label="File Rekening Koran"
                    labelAlign="left"
                  >
                    <a>{dataKpr.dokumen.file_koran}</a>
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
                      >
                        Simpan
                      </Button>
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
