import React from "react";
import { Layout, Menu } from "antd";

import styles from "../../styles/Layout.module.css";

const { Header } = Layout;

function navbar() {
  return (
    <Header
      className={styles.sitelayoutsubheaderbackground}
      style={{ padding: 0 }}
    >
      <div className={styles.logo}>
        <img src="/img/logo-zenia.png" width="100px" />
      </div>
    </Header>
  );
}

export default navbar;
