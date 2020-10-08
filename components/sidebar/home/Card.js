import { Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styles from "../../../styles/Layout.module.css";
// import Chart from "../home/Chart.js";

const { Meta } = Card;


class CardInfo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Col>
                        <Row>
                            <div>
                                <div className={styles.card}>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 24 }}>TOTAL NASABAH</p>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24 }}>12150</p>
                                </div>
                                <div className={styles.card1}>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16 }}>+ 250 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                </div>
                            </div>
                            <div className={styles.columnCard} >
                                <div className={styles.card} style={{ backgroundColor: "#7193E9" }}>
                                    <h1 className={styles.textCard} style={{ position: "absolute", left: 24, top: 24 }}>PENGGUNA LIFE BANK MOBILE</h1>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24 }}>13068</p>
                                </div>
                                <div className={styles.card1} style={{ backgroundColor: "#6186E7" }}>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16 }}>+ 73 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span> </p>
                                </div>
                            </div>
                            <div className={styles.columnCard}>
                                <div className={styles.card} style={{ backgroundColor: "#79C0D0" }}>
                                    <h1 className={styles.textCard} style={{ position: "absolute", left: 24, top: 24 }}>PENGGUNA TABUNGAN</h1>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24 }}>6.041</p>
                                </div>
                                <div className={styles.card1} style={{ backgroundColor: "#6AB9CB" }}>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16 }}>+ 16 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                </div>
                            </div>
                            <div className={styles.columnCard}>
                                <div className={styles.card} style={{ backgroundColor: "#DA7D9D" }}>
                                    <h1 className={styles.textCard} style={{ position: "absolute", left: 24, top: 24 }}>TABUNGAN AKTIF</h1>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24 }}>2.476</p>
                                </div>
                                <div className={styles.card1} style={{ backgroundColor: "#D66E92" }}>
                                    <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16 }}>+ 57 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Row style={{ marginTop: 71 }}>
                        <Col>
                            <Row>
                                <Col>
                                    <div className={styles.chart} style={{ backgroundColor: "#ffffff" }}>
                                        <h1 className={styles.textCard1} style={{ color: "#000000", position: "absolute", left: 24, top: 24 }}>PERTUMBUHAN PENGGUNA ZENIA</h1>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles.chart} style={{ backgroundColor: "#ffffff", marginLeft: 24}}>
                                        <h1 className={styles.textCard1} style={{ color: "#000000", position: "absolute", left: 44, top: 24 }}>PERTUMBUHAN PENGGUNA ZENIA</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row style={{ marginTop: 24 }}>
                                <div>
                                    <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
                                        <h1 className={styles.textCard1} style={{ color: "#7AC19A", position: "absolute", left: 24, top: 24 }} >PENGAJUAN KPR</h1>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24, color: "#7AC19A" }}>4.283</p>
                                    </div>
                                    <div className={styles.card1} style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE4F8" }}>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16, color: "#7AC19A" }}>+ 250 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                    </div>
                                </div>
                                <div className={styles.columnCard} >
                                    <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
                                        <h1 className={styles.textCard1} style={{ color: "#6186E7", position: "absolute", left: 24, top: 24 }}>KPR AKTIF</h1>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 64, fontSize: 24, color: "#6186E7" }}>1.671</p>
                                    </div>
                                    <div className={styles.card1} style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE4F8" }}>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16, color: "#6186E7" }}>+ 13 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ marginTop: 71 }}>
                                <div>
                                    <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
                                        <h1 className={styles.textCard1} style={{ color: "#3DA7BF", position: "absolute", left: 24, top: 24 }}>PENGAJUAN DITERIMA</h1>
                                        <p className={styles.textCard2} style={{ position: "absolute", left: 24, top: 64, fontSize: 24, color: "#3DA7BF" }}>3420 <span style={{ fontSize: 14 }}>(79.8%)</span></p>
                                    </div>
                                    <div className={styles.card1} style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE4F8" }}>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16, color: "#3DA7BF" }}>+ 8 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                    </div>
                                </div>
                                <div className={styles.columnCard} >
                                    <div className={styles.card} style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE4F8" }}>
                                        <h1 className={styles.textCard1} style={{ color: "#D66E92", position: "absolute", left: 24, top: 24 }}>PENGAJUAN DITOLAK</h1>
                                        <p className={styles.textCard2} style={{ position: "absolute", left: 24, top: 64, fontSize: 24, color: "#D66E92" }}>863 <span style={{ fontSize: 14 }}>(20.2%)</span></p>
                                    </div>
                                    <div className={styles.card1} style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE4F8" }}>
                                        <p className={styles.textCard} style={{ position: "absolute", left: 24, top: 16, color: "#D66E92" }}>+ 1 Hari ini <span style={{ position: "absolute", left: "200px" }}><img src="/img/group.svg" alt="First slide" /></span></p>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col style={{marginTop: 24}}>
                            <div className={styles.chart} style={{ backgroundColor: "#ffffff", marginLeft: 20, height: 344 }}>
                                <h1 className={styles.textCard1} style={{ color: "#000000", position: "absolute", left: 44, top: 24 }}>PERTUMBUHAN PENGGUNA ZENIA</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default CardInfo;