import React, { Component } from 'react'
import { Table } from 'antd'
import { fetchList } from 'src/service/common/index'

// 玩antd写的
class TicketList extends Component {
  state = {
    dataSource: [],
    columns: [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }]
  }
  componentWillMount() {
    fetchList({}).then((res) => {
      this.setState({
        dataSource: res
      })
    })
  }
  render() {
    return (
      <div>
        <Table className="table-text-center" dataSource={this.state.dataSource} bordered columns={this.state.columns} />
      </div>
    )
  }
}

export default TicketList