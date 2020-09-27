import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import styles from "../../../styles/Layout.module.css";

function Pengaturan () {
  return (
    <Form
      layout="vertical"
      style={{marginTop: 40, textAlign: "center"}}
    >
      <Form.Item label="Password Lama" style={{marginBottom: 8}}>
        <Input  className={styles.formPengaturan} style={{marginBottom: 24}} placeholder="Masukkan password lama" />
      </Form.Item>
      <Form.Item label="Password Baru" style={{marginBottom: 8}}>
        <Input className={styles.formPengaturan} style={{marginBottom: 24}} placeholder="Masukkan password baru" />
      </Form.Item>
      <Form.Item label="Konfirmasi Password Baru" style={{marginBottom: 8}}>
        <Input className={styles.formPengaturan} style={{marginBottom: 24}} placeholder="Konfirmasi password baru" />
      </Form.Item>
      <Form.Item>
        <Button className={styles.formPengaturan} type="primary">Ubah Password</Button>
      </Form.Item>
    </Form>
  );
};

export default Pengaturan;
