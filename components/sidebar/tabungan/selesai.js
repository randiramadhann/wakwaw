import React, { useState } from 'react';
import { Table, Input, Radio, Button, Tooltip, Pagination } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import styles from "../../../styles/Layout.module.css";

const columns = [
  {
    title: 'Nama Nasabah',
    dataIndex: 'namanasabah',
    key: 'namanasabah',
  },
  {
    title: 'Nomor Rekening',
    dataIndex: 'nomorrekening',
    key: 'nomorrekening',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Judul Tabungan',
    dataIndex: 'judultabungan',
    key: 'judultabungan',
  },
  {
    title: 'Target',
    dataIndex: 'target',
    key: 'target',
  },
  {
    title: 'Setoran',
    dataIndex: 'setoran',
    key: 'setoran',
  },
  {
    title: 'Terkumpul',
    dataIndex: 'terkumpul',
    key: 'terkumpul',
  },
];
const data = [
  {
    key: "1",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "2",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "3",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "4",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "5",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "6",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "7",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "8",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "9",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "10",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "11",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "12",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "13",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "14",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "15",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "16",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "17",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    key: "18",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    key: "19",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 2.000.000",
  },
  {
    key: "20",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
];

  const showTotal = (total, range) =>  {
    return `${range[0]}-${range[1]} of ${total}}`;
  }
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Demo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
      
      <Tooltip title="delete">
      <Button style={{backgroundColor: "red"}} shape="circle" icon={<DeleteOutlined />} />
    </Tooltip>
      

      <Input
        placeholder="Search"
        onSearch={value => console.log(value)}
        style={{ width: 200, float: "right" }}
      />
      <br/>
     
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      />
     
      <Table

        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          pageSizeOptions: ["7", "10", "30", "50"],
          showTotal: showTotal,
        }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Demo;