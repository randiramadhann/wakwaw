import React,{useState} from "react";
import Head from "next/head";
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';

import { Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";


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
    router.replace('/','/dashboard')
    // console.log(res.data.data.accessToken);
} catch (error) {
    console.log(error);
}
}

  return (
    <div>
      <Head>
        <title>ZENIA ADMIN</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="form-login" >
      <Form style={{ marginTop: "5%", marginLeft: "20%", width: "300px" }}
          name="normal_login"
          className="login-form"
          method="post"
          onFinish={onFinish}>
            <Form.Item
            name="username"
            id="username"
            onChange={(e) =>
              setLogin({ ...loginInfo, username: e.target.value })}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            id="password"
            onChange={(e) =>
              setLogin({ ...loginInfo, password: e.target.value })}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "300px" }}
            >
             Login
            </Button>
          </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default login;
