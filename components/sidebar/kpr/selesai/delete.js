import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function deleteAktif() {
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<DeleteOutlined />}
      size="middle"
      style={{
        background: "#EB5757",
        borderColor: "#EB5757",
      }}
    />
  );
}

export default deleteAktif;
