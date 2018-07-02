import React, { Component } from 'react'
import { Layout, message, Menu, Button, Popconfirm } from 'antd'
import { browserHistory } from 'react-router'
const { Header } = Layout

export default class HeaderNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logoutText: '确认退出？',
      menu: {
        mode: 'horizontal',
        children: [
          {
            key: 'a',
            initPath: '/',
            title: '首页'
          },
          {
            key: 'b',
            initPath: '/ticket/list',
            title: '票务'
          },
          {
            key: 'c',
            initPath: '/order/list',
            title: '订单'
          },
          {
            key: 'd',
            initPath: '/statistics/order',
            title: '统计'
          },
          {
            key: 'e',
            initPath: '/setting/basic/shop-info',
            title: '设置'
          },
        ]
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.confirmLogout = this.confirmLogout.bind(this);
  }
  componentWillMount() {
    this.getSelectedKeys(this.props.routes)
  }
  handleClick({item, key, keyPath}) {
    this.props.onCategoryChange(key)
    browserHistory.push(item.props.initPath)
  }
  getItemList(list) {
    return (list.map(val =>
      <Menu.Item key={val.key} initPath={val.initPath}>{val.title}</Menu.Item>
    ))
  }
  getSelectedKeys(routes) {
    const currentMenu = routes[2].path
    let result
    this.state.menu.children.forEach(val => {
      if (~val.initPath.indexOf(currentMenu)) result = val.key
    })
    if (!currentMenu || currentMenu === '/') result = 'a'
    this.props.onCategoryChange(result)
  }
  // 确认退出
  confirmLogout() {
    sessionStorage.removeItem('token') // 模拟登录用的
    message.success('退出成功！', 1.5)
    browserHistory.push('/login')
  }
  render () {
    return (
      <Header className="relative">
        <div className="logo" />
        <Menu
          theme="dark"
          mode={this.state.menu.mode}
          selectedKeys={[this.props.currentHeadNav]}
          defaultSelectedKeys={['a']}
          style={{ lineHeight: '64px', borderBottom: 0}}
          onClick={this.handleClick}
        >
          {this.getItemList(this.state.menu.children)}
        </Menu>
        <Popconfirm placement="bottomRight"
                    title={this.state.logoutText}
                    okText="确认"
                    cancelText="取消"
                    onConfirm={this.confirmLogout}>
          <Button type="primary" style={{position: 'absolute', right: '2%', top: 0, backgroundColor: '#333', borderColor: '#333', borderRadius: 0, height: '100%'}}>退出</Button>
        </Popconfirm>
      </Header>
    )
  }
}