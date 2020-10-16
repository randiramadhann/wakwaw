import React,{useState} from "react";
import { Layout} from "antd";
import Head from "next/head";


import styles from "../styles/Layout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Schedule from "../components/sidebar/dashboard/schedule";
import Card from "../components/sidebar/home/Card"
import {withAuth} from "../utils/withAuth"


const { Content,Footer } = Layout;

function dashboard() {

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
            <Card/>
            <Schedule  />
             <div style={{width:"1096px"}}><Footer style={{ textAlign: 'center',background:"#fff",color:"#000", fontFamily: "sans-serif" }}>&#169; 2020 Zenia Indonesia Dashboard</Footer></div>
        </Content>
        
      </Layout>
      
    </Layout>
    </>
  );
}

export default withAuth(dashboard);
