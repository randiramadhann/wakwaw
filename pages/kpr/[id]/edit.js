import React from "react";
import { Layout, Tabs } from "antd";

import styles from "../../../styles/Layout.module.css";
import Sidebar from "../../../components/layout/Sidebar";
import Navbar from "../../../components/layout/Navbar";

const { Content } = Layout;
const { TabPane } = Tabs;

function edit() {
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
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Data Nasabah" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Kontak" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Alamat" key="4">
                Content of Tab Pane 4
              </TabPane>
              <TabPane tab="Rumah KPR" key="5">
                Content of Tab Pane 5
              </TabPane>
              <TabPane tab="Dokumen" key="6">
                Content of Tab Pane 6
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default edit;
