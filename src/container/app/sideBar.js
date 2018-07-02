import React, { Component } from 'react'
import { Link } from 'react-router'
import { Layout, Menu, Icon } from 'antd'
import sideMenuData from 'container/app/sideMenuData'
const { SubMenu } = Menu
const { Sider } = Layout

export default class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sideMenuData: sideMenuData
    }
  }

  isEmptyObject(obj) {
    for ( var name in obj ) {
			return false
		}
		return true
  }
  /**
   * 递归调用获取侧边栏菜单
   */
  recursion(dataSource) {
    return (
      dataSource.map((menu, index) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={<span><Icon type={menu.icon} />{menu.title}</span>}>
              {this.recursion(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>
            <Link to={menu.path}>{menu.title}</Link>
          </Menu.Item>)
        }
      })
    )
  }
  getSelectedKeys(routes) {
    const currentSideMenuName = routes[routes.length-1].breadcrumbName
    const sideMenu = this.state.sideMenuData[this.props.currentHeadNav]
    let result
    for (let i = 0, len = sideMenu.subMenu.length; i < len; i++) {
      if (sideMenu.subMenu[i].children) {
        for (let j = 0, lens = sideMenu.subMenu[i].children.length; j < lens; j++) {
          if (sideMenu.subMenu[i].children[j].title === currentSideMenuName) {
            result = sideMenu.subMenu[i].children[j].key
          }
        }
      }
    }
    return [result]
  }
  render () {
    let sideMenu = this.state.sideMenuData[this.props.currentHeadNav]
    sideMenu = JSON.parse(JSON.stringify(sideMenu))
    return !this.isEmptyObject(sideMenu) ? (
      <Sider width={200} style={{ background: '#f2f2f2', borderRight: '1px solid #dfdfdf' }}>
        <Menu
          mode='inline'
          selectedKeys={this.getSelectedKeys(this.props.routes)}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={sideMenu.defaultOpenKeys}
          style={{ height: '100%', borderRight: 0 }}
        >
          {/* <SubMenuList /> */}
          {this.recursion(sideMenu.subMenu)}
        </Menu>
      </Sider>
    ) : (
      <span></span>
    )
  }
}