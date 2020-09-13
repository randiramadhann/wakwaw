import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function create() {
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<PlusOutlined />}
      size="middle"
      style={{
        background: "#3BA1FF",
        borderColor: "#3BA1FF",
        marginRight: "16px",
      }}
    />
  );
}

export default create;
