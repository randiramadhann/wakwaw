import React from "react";
import {
  Layout,
  Tabs,
  Button,
  Divider,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Radio,
  Space,
} from "antd";
import fetch from "isomorphic-fetch";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

export default class edit extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const data = await fetch(
      `https://my-json-server.typicode.com/noerswork/newapi/users/${id}`
    );
    const item = await data.json();
    return item;
  }
  //handlemodal
  state = { visible: false, value: 1 };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

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
    const {
      id,
      nama_nasabah,
      no_rek,
      setoran,
      target,
      terkumpul,
      status,
    } = this.props;
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
                      initialValue={target}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="setoran"
                      label="Setoran"
                      labelAlign="left"
                      initialValue={setoran}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="terkumpul"
                      label="Terkumpul"
                      labelAlign="left"
                      initialValue={terkumpul}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="metode_setoran"
                      label="Metode Setoran"
                      labelAlign="left"
                      initialValue="Auto Debet"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="tgl_pengajuan"
                      label="Tanggal Pengajuan"
                      labelAlign="left"
                      initialValue="12/01/2020"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="tgl_approve"
                      label="Tanggal Approval"
                      labelAlign="left"
                      initialValue="25/01/2020"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="tgl_target"
                      label="Tanggal Target Selesai"
                      labelAlign="left"
                      initialValue="30/05/2020"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="status"
                      label="Status KPR"
                      labelAlign="left"
                    >
                      <Radio.Group
                        onChange={this.onChange}
                        value={this.state.value}
                        defaultValue={status}
                      >
                        <Radio value="Pengajuan">Pengajuan</Radio>
                        <Radio value="Aktif">Aktif</Radio>
                        <Radio value="Ditolak">Ditolak</Radio>
                        <Radio value="Selesai">Selesai</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
                      initialValue={nama_nasabah}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_rek"
                      label="Nomor Rekening"
                      labelAlign="left"
                      initialValue={no_rek}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_ktp"
                      label="Nomor KTP"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="ttl"
                      label="Tempat dan Tanggal Lahir"
                      labelAlign="left"
                      initialValue="Klaten, 29/01/96"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kelamin"
                      label="Jenis Kelamin"
                      labelAlign="left"
                      initialValue="Laki-laki"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="pekerjaan"
                      label="Pekerjaan"
                      labelAlign="left"
                      initialValue="Karyawan Swasta"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="pendidikan"
                      label="Pendidikan Terakhir"
                      labelAlign="left"
                      initialValue="S1"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="status_kawin"
                      label="Status Perkawinan"
                      labelAlign="left"
                      initialValue="Belum Menikah"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="penghasilan"
                      label="Penghasilan"
                      labelAlign="left"
                      initialValue="5000000"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_npwp"
                      label="Nomor NPWP"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="nama_ibu"
                      label="Noma Ibu"
                      labelAlign="left"
                      initialValue="Fitriyani"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_kk"
                      label="Nomor KK"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
                      initialValue="ahmad@gmail.com"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_hp"
                      label="Nomor Telephone"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="no_penjamin"
                      label="Nomor Telephone Penjamin"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="hub_penjamin"
                      label="Hubungan Penjamin"
                      labelAlign="left"
                      initialValue="Ayah"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
                      initialValue="Jl. Mawar"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="provinsi"
                      label="Provinsi"
                      labelAlign="left"
                      initialValue="Jawa Timur"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kabupaten"
                      label="Kota/Kabupaten"
                      labelAlign="left"
                      initialValue="Ngawi"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kecamatan"
                      label="Kecamatan"
                      labelAlign="left"
                      initialValue="Ngawi"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kelurahan"
                      label="Kelurahan"
                      labelAlign="left"
                      initialValue="Pelem"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kodepos"
                      label="Kode Pos"
                      labelAlign="left"
                      initialValue="54321"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
                      initialValue="Jl. Mawar"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="kondisi"
                      label="Kondisi Rumah"
                      labelAlign="left"
                      initialValue="Baru"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="penjual"
                      label="Pihak Penjual"
                      labelAlign="left"
                      initialValue="Griya Hutama"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="nama_penjual"
                      label="Nama Penjual"
                      labelAlign="left"
                      initialValue="-"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="telp_penjual"
                      label="Nomor Telephone Penjual"
                      labelAlign="left"
                      initialValue="123"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="foto_rumah"
                      label="Foto Rumah"
                      labelAlign="left"
                      initialValue="rumah.jpeg"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
                    <Form.Item
                      name="file_ktp"
                      label="File KTP"
                      labelAlign="left"
                      initialValue="ktp.pdf"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="file_kk"
                      label="File Kartu Keluarga"
                      labelAlign="left"
                      initialValue="kk.pdf"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="file_rek"
                      label="File Rekening Koran"
                      labelAlign="left"
                      initialValue="rek.pdf"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Space size="middle">
                        <Button
                          href={`/kpr/${id}/detail`}
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
}
