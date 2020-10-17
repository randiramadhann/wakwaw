import React,{useState} from "react";
import Head from "next/head";
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';

import { Form, Input, Button,message} from "antd";


const initialState ={
  username:'',
  password:''
}

function login() {
  const [loginInfo, setLogin]=useState(initialState);
  const router = useRouter();

  const onFinish = async () => {
   console.log("mydata:", loginInfo)
   try {
    const res = await axios.post(`http://157.245.62.77:8080/api/auth/signin`, {...loginInfo
    })
    cookies.set(null, 'token', res.data.data.accessToken,{path:'/'});
    message.success('Login berhasil!')
    router.replace('/dashboard')
} catch (error) {
    message.warning('Username atau password yang anda masukan salah!');
}
}
  return (
    <div>
      <Head>
        <title>ZENIA ADMIN</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div style={{ 
      margin: "0",
      width: "100%",
      height: "768px",
      background: "#EFEFEF"
    }}>
      <div 
        style={{
          position: "absolute",
          width: "424px",
          height: "419px",
          left: "471px",
          top: "120px",
          background: "#FFFFFF",
          boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          display:"table"
        }}>
        <div className="form-login" style={{
          display:"table-cell",
          verticalAlign: "middle",
          textAlign:"center", 
          // margin:"auto" 
          }}  >
            <img src="/img/logo-zenia.png" alt="Zenia" style={{width:"25%", paddingBottom: "17px"}} />
          <h1 style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            
            color: "#555555",
          }}>Masuk ke Dashboard Zenia</h1>
          <Form
              style={{
                display:"table",/* shrinks to fit content */
                margin:"auto",
              }}
              name="normal_login"
              className="login-form"
              method="post"
              onFinish={onFinish}>
                <Form.Item
                label="Username"
                labelAlign="left"
                style={{
                  display:"grid",
                }}
                name="username"
                id="username"
                onChange={(e) =>
                  setLogin({ ...loginInfo, username: e.target.value })}
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  style={{
                    width: "280px",
                    height: "40px",
                    background: "#FFFFFF",
                    border: "1px solid #CFCFCF",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                labelAlign="left"
                style={{
                  display:"grid"
                }}
                name="password"
                id="password"
                onChange={(e) =>
                  setLogin({ ...loginInfo, password: e.target.value })}
              >
                <Input
                  // prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Masukkan password"
                  style={{
                    width: "280px",
                    height: "40px",
                    background: "#FFFFFF",
                    border: "1px solid #CFCFCF",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    width: "240px",
                    height: "48px",
                    background: "#2EA1FF",
                    bordeRadius: "5px",
                    borderColor: "#59acfa"
                  }}
                >
                Masuk
                </Button>
              </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default login;
