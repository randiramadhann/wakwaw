import { Table, Input, Divider } from 'antd';
import React, { useState } from 'react';

export const dataNasabah = [
  {
    id: "1",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "2",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "3",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "4",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "5",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "6",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "7",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "8",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "9",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "10",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "11",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "12",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "13",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "14",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "15",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "16",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "17",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
  },
  {
    id: "18",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  },
  {
    id: "19",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 2.000.000",
  },
  {
    id: "20",
    nomorrekening: '112 345 66748',
    namanasabah: "Ridwan Supriadi",
    judultabungan: "DP Rumah Mewah",
    target: "Listrik PLN",
    setoran: '28 September 2020',
    terkumpul: "Rp 1.000.000",
    status: ["gagal"]
  }



];

class MonitoringTable extends React.Component {
  state = {
    bottom: 'bottomRight',
    filteredJenis: null,
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredJenis: filters,
      sortedInfo: null,
    });
  };

  render() {
    let { filteredJenis, sortedInfo } = this.state;
    filteredJenis = filteredJenis || {};
    sortedInfo = sortedInfo || {};
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

    return (
      <div>
        <div>
          <Input
            placeholder="Search"
            onSearch={value => console.log(value)}
            style={{ width: 200, float: "right" }}
          />
          <br />
          <br />
          <Divider />
          <Table
            columns={columns}
            pagination={{ position: [this.state.bottom] }}
            dataSource={dataNasabah}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default MonitoringTable;