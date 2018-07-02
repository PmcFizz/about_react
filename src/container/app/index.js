import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  changeCategory
} from 'src/store/actions/changeCategory'
import HeaderNav from './headerNav'
import SideBar from './sideBar'
const {
  Content
} = Layout

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
}

class App extends Component {
  render () {
    const {dispatch, headNav, routes, params} = this.props
    
    return ( 
      <div id="container">
        <Layout className="min_height">
          <HeaderNav routes={routes} currentHeadNav={headNav} onCategoryChange={categoryNum =>
            dispatch(changeCategory(categoryNum))
          }/>
          <Layout className='ant-layout-has-sider'>
            <SideBar routes={routes} currentHeadNav={headNav}/>
            <Layout>
              <Breadcrumb
                routes={routes.slice(1)}
                params={params}
                style={{background: '#fff', padding: 15, borderBottom: '1px solid #dfdfdf'}}
                itemRender={itemRender}
              />
              <Content className="min_height" style={{ background: '#fff', padding: 24, margin: 0}}>
                { this.props.children }
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

function select(state) {
  return {
    headNav: state.categoryChange.headNav
  }
}

export default connect(select)(App)