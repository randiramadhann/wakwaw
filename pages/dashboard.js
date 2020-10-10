import React from "react";
import { Layout, Timeline, Col, Row, DatePicker, Tag } from "antd";

import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Schedule from "../components/sidebar/dashboard/schedule";
import Card from "../components/sidebar/home/Card"


const { Content } = Layout;

function dashboard() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "24px 16px 0" }}>
            <Card/>
          <div
            className={styles.sitelayoutbackground}
            style={{ padding: 24, minHeight: 360, marginTop: 24 }}
          >
            <Schedule  />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default dashboard;
