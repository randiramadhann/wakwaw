import React from "react";
import { Layout } from "antd";
import Head from "next/head";

import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Form from "../components/sidebar/pengaturan/pengaturan.js"

const { Content } = Layout;

function pengaturan() {
  
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
            style={{ position: "absolute", left: 615, padding: 24, minHeight: 471, width: 352 }}
          >
            <h1 className={styles.textPengaturan} style={{ textAlign: 'center', marginTop: 40 }}> Ubah password</h1>
            <Form/>
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

export default pengaturan;
