import React from "react";
import { Layout } from "antd";
import Head from "next/head";

import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const { Content } = Layout;

function dataadmin() {
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
            dataadmin page
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

export default dataadmin;
