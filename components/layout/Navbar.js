import React from "react";
import { Layout, Menu } from "antd";

import styles from "../../styles/Layout.module.css";

const { Header } = Layout;

function navbar() {
  return (
    <Header
      className={styles.sitelayoutsubheaderbackground}
      style={{ padding: 0 }}
    />
  );
}

export default navbar;
