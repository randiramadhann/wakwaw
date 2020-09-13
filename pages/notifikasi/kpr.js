import React from "react";
import { Layout } from "antd";
import Notifikasi from '../../components/sidebar/notifikasi/kpr';
import styles from "../../styles/Layout.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;

function notifKpr() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            <Notifikasi/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default notifKpr;
