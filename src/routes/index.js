import React from 'react';
import { Route,IndexRoute } from 'react-router'

const App = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('container/app/index').default)
  })
}

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/home/index').default)
  })
}

// 登录
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/login/index').default)
  })
}

// 统计
const Order = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/statistics/order/index').default)
  })
}

const AfterSale = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/statistics/afterSale/index').default)
  })
}

const TicketCheck = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/statistics/ticketCheck/index').default)
  })
}

// 设置
const SettingBasic = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/shop/index').default)
  })
}

const SettingTest = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/test/index').default)
  })
}

const SettingEntry = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/entry/index').default)
  })
}

const SettingCustomPages = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/customPages/index').default)
  })
}

const SettingSms = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/sms/index').default)
  })
}

const SettingAjax = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/basic/ajax/index').default)
  })
}

const SettingAuth = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/wxmini/auth/index').default)
  })
}

const SettingMessage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/setting/wxmini/message/index').default)
  })
}

const TicketList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('pages/ticket/list/index').default)
  })
}

/* 进入路由的判断 */
function isLogin(nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}


const routes = (
  <Route>
    <Route path="/" getComponent={App} onEnter={isLogin}>
      <IndexRoute breadcrumbName="首页" getComponent={Home} />
      <Route path="ticket" breadcrumbName="票务">
        <Route path="list" breadcrumbName="票务列表" getComponent={TicketList} />
      </Route>
      <Route path="statistics" breadcrumbName="统计">
        <Route path="order" breadcrumbName="订单统计" getComponent={Order} />
        <Route path="after-sale" breadcrumbName="售后统计" getComponent={AfterSale} />
        <Route path="ticket-check" breadcrumbName="验票统计" getComponent={TicketCheck} />
      </Route>
      <Route path="setting" breadcrumbName="设置">
        <Route path="basic" breadcrumbName="基础信息">
          <Route path="shop-info" breadcrumbName="商户信息设置" getComponent={SettingBasic} />
          <Route path="test" breadcrumbName="购票协议设置" getComponent={SettingTest} />
          <Route path="custom-page" breadcrumbName="页面设置" getComponent={SettingCustomPages} />
          <Route path="entry" breadcrumbName="入口设置" getComponent={SettingEntry} />
          <Route path="sms" breadcrumbName="短信设置" getComponent={SettingSms} />
          <Route path="ajax" breadcrumbName="测试ajax请求" getComponent={SettingAjax} />
        </Route>
        <Route path="wxmini" breadcrumbName="小程序">
          <Route path="auth" breadcrumbName="授权设置" getComponent={SettingAuth} />
          <Route path="message" breadcrumbName="消息配置" getComponent={SettingMessage} />
        </Route>
      </Route>
    </Route>
    <Route path="/login" breadcrumbName="登录" getComponent={Login}/>
  </Route>
);

export default routes
