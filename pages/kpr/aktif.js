import React from "react";
import { Layout } from "antd";

import styles from "../../styles/Layout.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Table from "../../components/sidebar/kpr/aktif/table";
import Create from "../../components/sidebar/kpr/aktif/add";
import Search from "../../components/sidebar/kpr/aktif/search";

const { Content } = Layout;

function kprAktif() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              marginBottom: "24px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            KPR AKTIF
          </div>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            <div
              style={{
                marginBottom: "16px",
                position: "relative",
                float: "right",
                zIndex: "10",
              }}
            >
              <Create />
              <Search />
            </div>

            <Table />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default kprAktif;
