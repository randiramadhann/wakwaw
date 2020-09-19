import React from "react";
import { Layout, Timeline, Col, Row, DatePicker, Tag } from "antd";

import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const { Content } = Layout;
function onPanelChange(value, mode) {
  console.log(value, mode);
}

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
            <Row>
              <Col span={6}>
                <DatePicker open />
              </Col>
              <Col span={12}>
                <h3 style={{ marginLeft: "100px" }}>JADWAL WAWANCARA</h3>
                <ul
                  className="ant-timeline ant-timeline-label"
                  style={{ marginLeft: "-300px", marginTop: "50px" }}
                >
                  <li className="ant-timeline-item ant-timeline-item-left">
                    <div className="ant-timeline-item-label">10.00</div>
                    <div className="ant-timeline-item-tail"></div>
                    <div
                      className="ant-timeline-item-head ant-timeline-item-head-blue"
                      style={{ borderColor: "orange" }}
                    ></div>
                    <div className={styles.anttimelineitemcontentorg}>
                      Create a services site 2015-09-01
                    </div>
                  </li>
                  <li className="ant-timeline-item ant-timeline-item-left">
                    <div className="ant-timeline-item-label">11.00</div>
                    <div className="ant-timeline-item-tail"></div>
                    <div
                      className="ant-timeline-item-head ant-timeline-item-head-blue"
                      style={{ borderColor: "grey" }}
                    ></div>
                    <div
                      className="ant-timeline-item-content"
                      style={{ height: "50px" }}
                    >
                      Solve initial network problems 2015-09-01
                    </div>
                  </li>
                  <li className="ant-timeline-item ant-timeline-item-left">
                    <div className="ant-timeline-item-label">12.00</div>
                    <div className="ant-timeline-item-tail"></div>
                    <div
                      className="ant-timeline-item-head ant-timeline-item-head-blue"
                      style={{ borderColor: " #4399fad8" }}
                    ></div>
                    <div className={styles.anttimelineitemcontentblue}>
                      Technical testing 2015-09-01
                    </div>
                  </li>
                  <li className="ant-timeline-item ant-timeline-item-last ant-timeline-item-left">
                    <div className="ant-timeline-item-label">13.00</div>
                    <div className="ant-timeline-item-tail"></div>
                    <div
                      className="ant-timeline-item-head ant-timeline-item-head-blue"
                      style={{ borderColor: "grey" }}
                    ></div>
                    <div
                      className="ant-timeline-item-content"
                      style={{ height: "50px" }}
                    >
                      Network problems being solved 2015-09-01
                    </div>
                  </li>
                </ul>
              </Col>
              <Col style={{ marginLeft: "50px" }}>
                <div
                  style={{
                    background: "#4399fad8",
                    position: "absolute",
                    height: "25px",
                    width: "25px",
                    marginTop: "50px",
                  }}
                />
                <p style={{ marginLeft: "30px", marginTop: "50px" }}>
                  Interview yang akan datang
                </p>
                <div
                  style={{
                    background: "orange",
                    position: "absolute",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <p style={{ marginLeft: "30px" }}>
                  Menunggu Konfirmasi Nasabah
                </p>
                <div
                  style={{
                    background: "grey",
                    position: "absolute",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <p style={{ marginLeft: "30px" }}>Interview selesai</p>

                <div
                  style={{
                    background: "red",
                    position: "absolute",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <p style={{ marginLeft: "30px" }}>Interview batal</p>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default dashboard;
