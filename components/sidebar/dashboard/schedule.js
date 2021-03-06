import React from "react";
import { Layout, Timeline, Col, Row, Calendar, Tag } from "antd";

import styles from "../../../styles/Layout.module.css";

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

function schedule() {
  return (
    <div className="schedule" style={{marginTop:"24px", background:"#fff", width:"1096px", marginBottom:"24px"}}>
      <Row style={{padding:"24px"}}>
        <Col span={8} style={{marginTop:"24px"}}>
          <div className={styles.sitecalendardemocard}>
            <Calendar fullscreen={false} onChange={onChange} onOk={onOk} />
          </div>
        </Col>
        <Col span={8} >
          <h3 style={{fontFamily: "sans-serif", fontWeight: "bold"}}>JADWAL WAWANCARA</h3>
          <ul
            className="ant-timeline ant-timeline-label"
            style={{ marginLeft: "-300px", marginTop: "50px" }}
          >
            <li className="ant-timeline-item ant-timeline-item-left">
              <div className="ant-timeline-item-label" style={{fontFamily: "sans-serif"}}>10.00</div>
              <div className="ant-timeline-item-tail"></div>
              <div
                className="ant-timeline-item-head ant-timeline-item-head-blue"
                style={{ borderColor: "orange" }}
              ></div>
              <div className={styles.anttimelineitemcontentorg} style={{fontFamily: "sans-serif"}}>
                Interviewer: Farah Haisan, Teddy Purba Nasabah:
                Angga Saputra We..
              </div>
            </li>
            <li className="ant-timeline-item ant-timeline-item-left">
              <div className="ant-timeline-item-label" style={{fontFamily: "sans-serif"}}>11.00</div>
              <div className="ant-timeline-item-tail" style={{fontFamily: "sans-serif"}}></div>
              <div
                className="ant-timeline-item-head ant-timeline-item-head-blue"
                style={{ borderColor: "grey" }}
              ></div>
              <div
                className="ant-timeline-item-content"
                style={{ height: "50px" }}
              ></div>
            </li>
            <li className="ant-timeline-item ant-timeline-item-left">
              <div className="ant-timeline-item-label" style={{fontFamily: "sans-serif"}}>12.00</div>
              <div className="ant-timeline-item-tail"></div>
              <div
                className="ant-timeline-item-head ant-timeline-item-head-blue"
                style={{ borderColor: " #4399fad8" }}
              ></div>
              <div className={styles.anttimelineitemcontentblue} style={{fontFamily: "sans-serif"}}>
                Interviewer: Farah Haisan, Teddy Purba Nasabah:
                Angga Saputra We..
              </div>
            </li>
            <li className="ant-timeline-item ant-timeline-item-last ant-timeline-item-left">
              <div className="ant-timeline-item-label" style={{fontFamily: "sans-serif"}}>13.00</div>
              <div className="ant-timeline-item-tail"></div>
              <div
                className="ant-timeline-item-head ant-timeline-item-head-blue"
                style={{ borderColor: "grey" }}
              ></div>
              <div
                className="ant-timeline-item-content"
                style={{ height: "50px" }}
                style={{fontFamily: "sans-serif"}}
              >
                Interviewer: Farah Haisan, Teddy Purba Nasabah:
                Angga Saputra We..
              </div>
            </li>
          </ul>
        </Col>
        <Col span={8} style={{paddingLeft:"60px"}}>
          <div
            style={{
              background: "#4399fad8",
              position: "absolute",
              height: "25px",
              width: "25px",
              marginTop: "50px",
            }}
          />
          <p style={{ marginLeft: "30px", marginTop: "50px",  fontFamily: "sans-serif" }}>
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
          <p style={{ marginLeft: "30px", fontFamily: "sans-serif" }}>Menunggu Konfirmasi Nasabah</p>
          <div
            style={{
              background: "grey",
              position: "absolute",
              height: "25px",
              width: "25px",
            }}
          />
          <p style={{ marginLeft: "30px", fontFamily: "sans-serif" }}>Interview selesai</p>
          <div
            style={{
              background: "red",
              position: "absolute",
              height: "25px",
              width: "25px",
            }}
          />
          <p style={{ marginLeft: "30px", fontFamily: "sans-serif" }}>Interview batal</p>
        </Col>
      </Row>
    </div>
  );
}

export default schedule;
