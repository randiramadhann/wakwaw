import React,{useState} from "react";
import { Layout } from "antd";
import Head from "next/head";
import { List, Avatar } from 'antd';
import cookies from 'nookies'
import axios from 'axios'

import Notifikasi from '../../components/sidebar/notifikasi/kpr';
import styles from "../../styles/Layout.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const { Content } = Layout;

function notifKpr({items}) {
  const [dataSource, setDataSource] = useState(items);
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
             <List
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 5,
              position:"bottom"
            }}
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={item => (
            <List.Item>
             <List.Item.Meta
               avatar={<Avatar src="/home.png" />}
                title={<a href="https://ant.design">Pendaftaran KPR</a>}
                description={item.dashboardDescription}
            />
        <div>{item.createdDate}</div>
      </List.Item>
    )}
  />
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

notifKpr.getInitialProps = async context => {
  //ambil token dari cookiesnya dulu
  const { token } = cookies.get(context);
  //await get pakai axios di return dalam bentuk items
  const response = await axios.get('http://157.245.62.77:8080/api/dashboard/notification/tabungan', {
    headers: {
      "Authorization" : 'Bearer ' + token
    }})
    console.log("the response:", response)
    return{
      items: response.data.data
    }
};

export default notifKpr;
