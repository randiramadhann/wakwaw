import React from "react";
import { Layout } from "antd";
import Card from '../components/sidebar/home/Card';
import CardKPR from '../components/sidebar/home/CardKPR';
import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const { Content } = Layout;

function dashboard() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "24px 16px 0" }}>
          <Card/>
          <br/>
          <br/>
          <br/>
          <br/>
          {/* <CardKPR/> */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default dashboard;
