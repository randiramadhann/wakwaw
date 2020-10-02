import React from "react";
import { Layout, Timeline, Col, Row, DatePicker, Tag } from "antd";

import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Schedule from "../components/sidebar/dashboard/schedule";
import Card from "../components/sidebar/home/Card";
import CardKPR from "../components/sidebar/home/CardKPR";
const { Content } = Layout;

function dashboard() {
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
            <Schedule />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default dashboard;
