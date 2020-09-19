import React from "react";
import { Layout, Table, Tag, Button, Space, Input } from "antd";
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import fetch from "isomorphic-fetch";

import styles from "../../styles/Layout.module.css";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import Create from "../../components/sidebar/kpr/pengajuan/add";
import Search from "../../components/sidebar/kpr/pengajuan/search";

const { Content } = Layout;

const columns = [
  {
    title: "Nama Nasabah",
    dataIndex: ["form", "name"],
    // render: (record) => record.form.name,
  },
  {
    title: "Nomor Rekening",
    dataIndex: "no_rek",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (value) => (
      <Tag style={{ borderRadius: "20px" }} color="#F2994A">
        {value}
      </Tag>
    ),
  },
  {
    title: "Target",
    dataIndex: "target",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Setoran",
    dataIndex: "setoran",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "Terkumpul",
    dataIndex: "terkumpul",
    render: (value) => `Rp ${value}.00`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link href={`/kpr/${record.id}/detail`}>
          <a>Detail</a>
        </Link>
        <Link href={`/kpr/${record.id}/edit`}>
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<EditOutlined />}
            style={{
              background: "#EFEFEF",
              borderColor: "#EFEFEF",
              color: "#333",
            }}
          />
        </Link>
      </Space>
    ),
  },
];

export default class kprPengajuan extends React.Component {
  //fetch data api yang swagger
  static async getInitialProps() {
    const data = await fetch(`http://157.245.62.77:8080/kpr`);
    const items = await data.json();
    return {
      items,
    };
  }

  componentWillMount() {
    this.setState({ items: this.props.items });
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    nameSearch: "",
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const { items } = this.props;
    console.log(items);

    return (
      <Layout style={{ height: "100vh" }}>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                marginBottom: "24px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              KPR PENGAJUAN
            </div>
            <div
              className={styles.sitelayoutbackground}
              style={{ padding: 24, minHeight: 360 }}
            >
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  float: "right",
                  zIndex: "10",
                }}
              >
                //komponen input searchnya berdasar nama nasabah jadi habis
                form.name sesuai apinya
                <Input.Search
                  allowClear
                  onSearch={(nameSearch) =>
                    this.setState({
                      items: this.props.items.filter((person) =>
                        person.form.name
                          .toString()
                          .toLowerCase()
                          .includes(nameSearch.toLowerCase())
                      ),
                    })
                  }
                />
              </div>

              <Table
                pagination={{
                  pageSize: 5,
                  position: ["bottomCenter"],
                }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={this.state.items}
                rowKey={(row) => row.id}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
