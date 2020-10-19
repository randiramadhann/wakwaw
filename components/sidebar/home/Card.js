import { Card, Avatar, Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "../../../styles/Layout.module.css";
import { Line } from "react-chartjs-2";
// import Chart from "../home/Chart.js";
import Chart from "../home/Chart";
const { Meta } = Card;

const data = {
  labels: ["2016", "2017", "2018", "2019", "2020"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 4,
      pointRadius: 1,
      pointHitRadius: 5,
      data: [5, 13, 10, 16],
    },
  ],
};

class CardInfo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Col>
            <Row>
              <div>
                <div className={styles.card}>
                  <p
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 24 }}
                  >
                    TOTAL NASABAH
                  </p>
                  <p
                    className={styles.textCard}
                    style={{
                      position: "absolute",
                      left: 24,
                      top: 64,
                      fontSize: 24,
                    }}
                  >
                    12150
                  </p>
                </div>
                <div className={styles.card1}>
                  <p
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 16 }}
                  >
                    + 250 Hari ini{" "}
                    <span style={{ position: "absolute", left: "200px" }}>
                      <img src="/img/Group.svg" alt="First slide" />
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.columnCard}>
                <div
                  className={styles.card}
                  style={{ backgroundColor: "#7193E9" }}
                >
                  <h1
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 24 }}
                  >
                    PENGGUNA LIFE BANK MOBILE
                  </h1>
                  <p
                    className={styles.textCard}
                    style={{
                      position: "absolute",
                      left: 24,
                      top: 64,
                      fontSize: 24,
                    }}
                  >
                    13068
                  </p>
                </div>
                <div
                  className={styles.card1}
                  style={{ backgroundColor: "#6186E7" }}
                >
                  <p
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 16 }}
                  >
                    + 73 Hari ini{" "}
                    <span style={{ position: "absolute", left: "200px" }}>
                      <img src="/img/Group.svg" alt="First slide" />
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className={styles.columnCard}>
                <div
                  className={styles.card}
                  style={{ backgroundColor: "#79C0D0" }}
                >
                  <h1
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 24 }}
                  >
                    PENGGUNA TABUNGAN
                  </h1>
                  <p
                    className={styles.textCard}
                    style={{
                      position: "absolute",
                      left: 24,
                      top: 64,
                      fontSize: 24,
                    }}
                  >
                    6.041
                  </p>
                </div>
                <div
                  className={styles.card1}
                  style={{ backgroundColor: "#6AB9CB" }}
                >
                  <p
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 16 }}
                  >
                    + 16 Hari ini{" "}
                    <span style={{ position: "absolute", left: "200px" }}>
                      <img src="/img/Group.svg" alt="First slide" />
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.columnCard}>
                <div
                  className={styles.card}
                  style={{ backgroundColor: "#DA7D9D" }}
                >
                  <h1
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 24, fontFamily: "sans-serif" }}
                  >
                    TABUNGAN AKTIF
                  </h1>
                  <p
                    className={styles.textCard}
                    style={{
                      position: "absolute",
                      left: 24,
                      top: 64,
                      fontSize: 24,
                      fontFamily: "sans-serif"
                    }}
                  >
                    2.476
                  </p>
                </div>
                <div
                  className={styles.card1}
                  style={{ backgroundColor: "#D66E92" }}
                >
                  <p
                    className={styles.textCard}
                    style={{ position: "absolute", left: 24, top: 16, fontFamily: "sans-serif" }}
                  >
                    + 57 Hari ini{" "}
                    <span style={{ position: "absolute", left: "200px" }}>
                      <img src="/img/Group.svg" alt="First slide" />
                    </span>
                  </p>
                </div>
              </div>
            </Row>
          </Col>
          <Row style={{ marginTop: 71 }}>
            <Col>
              <Row>
                <Col>
                  <div
                    className={styles.chart}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#000000",
                        position: "absolute",
                        left: 24,
                        top: 24,
                        fontFamily: "sans-serif",
                        fontWeight: "bold"
                      }}
                    >
                      PERTUMBUHAN PENGGUNA ZENIA
                    </h1>
                    
                    <br />
                    <br />
                    <Line style={{fontFamily: "sans-serif"}} data={data} width={400} height={200} />
                  </div>
                </Col>
                <Col>
                  <div
                    className={styles.chart}
                    style={{ backgroundColor: "#ffffff", marginLeft: 20, fontFamily: "sans-serif" }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#000000",
                        position: "absolute",
                        left: 44,
                        top: 24,
                        fontWeight: "bold"
                      }}
                    >
                      DANA PIHAK KETIGA
                    </h1>
                   
                    <br />
                    <br />
                    <Line data={data} width={400} height={200} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row style={{ marginTop: 24 }}>
                <div>
                  <div
                    className={styles.card}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#7AC19A",
                        position: "absolute",
                        left: 24,
                        top: 24,
                        fontWeight: "bold"
                      }}
                    >
                      PENGAJUAN KPR
                    </h1>
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 64,
                        fontSize: 24,
                        color: "#7AC19A",
                        fontWeight: "bold"
                      }}
                    >
                      4.283
                    </p>
                  </div>
                  <div
                    className={styles.card1}
                    style={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #DDE4F8",
                    }}
                  >
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 16,
                        color: "#7AC19A",
                      }}
                    >
                      + 250 Hari ini{" "}
                      <span style={{ position: "absolute", left: "200px" }}>
                        <img
                          src="/img/group1.svg"
                          style={{ color: "7AC19A" }}
                          alt="First slide"
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.columnCard}>
                  <div
                    className={styles.card}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#6186E7",
                        position: "absolute",
                        left: 24,
                        top: 24,
                        fontWeight: "bold"
                      }}
                    >
                      KPR AKTIF
                    </h1>
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 64,
                        fontSize: 24,
                        color: "#6186E7",
                      }}
                    >
                      1.671
                    </p>
                  </div>
                  <div
                    className={styles.card1}
                    style={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #DDE4F8",
                    }}
                  >
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 16,
                        color: "#6186E7",
                      }}
                    >
                      + 13 Hari ini{" "}
                      <span style={{ position: "absolute", left: "200px" }}>
                        <img src="/img/group2.svg" alt="First slide" />
                      </span>
                    </p>
                  </div>
                </div>
              </Row>
              <Row style={{ marginTop: 71 }}>
                <div>
                  <div
                    className={styles.card}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#3DA7BF",
                        position: "absolute",
                        left: 24,
                        top: 24,
                        fontWeight: "bold"
                      }}
                    >
                      PENGAJUAN DITERIMA
                    </h1>
                    <p
                      className={styles.textCard2}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 64,
                        fontSize: 24,
                        color: "#3DA7BF",
                      }}
                    >
                      3420 <span style={{ fontSize: 14 }}>(79.8%)</span>
                    </p>
                  </div>
                  <div
                    className={styles.card1}
                    style={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #DDE4F8",
                    }}
                  >
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 16,
                        color: "#3DA7BF",
                      }}
                    >
                      + 8 Hari ini{" "}
                      <span style={{ position: "absolute", left: "200px" }}>
                        <img src="/img/group3.svg" alt="First slide" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.columnCard}>
                  <div
                    className={styles.card}
                    style={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #DDE4F8",
                    }}
                  >
                    <h1
                      className={styles.textCard1}
                      style={{
                        color: "#D66E92",
                        position: "absolute",
                        left: 24,
                        top: 24,
                        fontWeight: "bold"
                      }}
                    >
                      PENGAJUAN DITOLAK
                    </h1>
                    <p
                      className={styles.textCard2}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 64,
                        fontSize: 24,
                        color: "#D66E92",
                      }}
                    >
                      863 <span style={{ fontSize: 14 }}>(20.2%)</span>
                    </p>
                  </div>
                  <div
                    className={styles.card1}
                    style={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #DDE4F8",
                    }}
                  >
                    <p
                      className={styles.textCard}
                      style={{
                        position: "absolute",
                        left: 24,
                        top: 16,
                        color: "#D66E92",
                      }}
                    >
                      + 1 Hari ini{" "}
                      <span style={{ position: "absolute", left: "200px" }}>
                        <img src="/img/group4.svg" alt="First slide" />
                      </span>
                    </p>
                  </div>
                </div>
              </Row>
            </Col>
            <Col style={{ marginTop: 24 }}>
              <div
                className={styles.chart}
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: 20,
                  height: 344,
                }}
              >
                <h1
                  className={styles.textCard1}
                  style={{
                    color: "#000000",
                    position: "absolute",
                    left: 44,
                    top: 24,
                    fontWeight: "bold"
                  }}
                >
                  PENDANAAN KPR
                </h1>
                <br />
                <br />
                <br />
                <Line data={data} width={400} height={200} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CardInfo;
