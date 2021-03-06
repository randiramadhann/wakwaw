import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  BellOutlined,
  TeamOutlined,
  WalletOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import cookies from 'nookies';

import styles from "../../styles/Layout.module.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function sidebar({ router }) {

  const handleLogout=()=>{
    cookies.destroy(null,'token');
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className={styles.sitelayoutsidebar}
    >
      <Menu
        style={{
          background: "#001c72",
          color: "rgba(255, 255, 255, 0.65)",
          width: "201px",
          marginTop: "20px",
        }}
        mode="inline"
        selectedKeys={[router.pathname]}
      >
        <Menu.Item key="/dashboard" icon={<DesktopOutlined />}>
          <Link href="/dashboard">
            <a style={{fontFamily: "sans-serif"}}>Dashboard</a>
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<BellOutlined />} title="Notifikasi">
          <Menu.Item key="/notifikasi/nasabah">
            <Link href="/notifikasi/nasabah">
              <a style={{fontFamily: "sans-serif"}}>Nasabah</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/notifikasi/tabungan">
            <Link href="/notifikasi/tabungan">
              <a style={{fontFamily: "sans-serif"}}>Tabungan</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/notifikasi/kpr">
            <Link href="/notifikasi/kpr">
              <a style={{fontFamily: "sans-serif"}}>KPR</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Data Nasabah">
          <Menu.Item key="/datanasabah/verifikasi">
            <Link href="/datanasabah/verifikasi">
              <a style={{fontFamily: "sans-serif"}}>Verifikasi</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/datanasabah/nonverifikasi">
            <Link href="/datanasabah/nonverifikasi">
              <a style={{fontFamily: "sans-serif"}}>Belum Diverifikasi</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<WalletOutlined />} title="Tabungan">
          <Menu.Item key="/tabungan/aktif">
            <Link href="/tabungan/aktif">
              <a style={{fontFamily: "sans-serif"}}>Aktif</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/tabungan/selesai">
            <Link href="/tabungan/selesai">
              <a style={{fontFamily: "sans-serif"}}>Selesai</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<HomeOutlined />} title="KPR">
          <Menu.Item key="/kpr/pengajuan">
            <Link href="/kpr/pengajuan">
              <a style={{fontFamily: "sans-serif"}}>Pengajuan</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/kpr/aktif">
            <Link href="/kpr/aktif">
              <a style={{fontFamily: "sans-serif"}}>Aktif</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/kpr/selesai">
            <Link href="/kpr/selesai">
              <a style={{fontFamily: "sans-serif"}}>Selesai</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/topup/topup" icon={<DesktopOutlined />}>
          <Link href="/topup/topup">
            <a style={{fontFamily: "sans-serif"}}>Top Up</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/dataadmin/" icon={<UserOutlined />}>
          <Link href="/dataadmin">
            <a style={{fontFamily: "sans-serif"}}>Data Admin</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/pengaturan" icon={<SettingOutlined />}>
          <Link href="/pengaturan">
            <a style={{fontFamily: "sans-serif"}}>Pengaturan</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="14" icon={<ImportOutlined />}>
          <Link href="/login">
          <a onClick={handleLogout} style={{fontFamily: "sans-serif"}}>Keluar</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(sidebar);
