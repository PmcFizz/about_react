
/**
 * sideMenu侧边菜单的数据
 * sideMenu下面的一级key对应的是顶部导航栏的key
 */
const sideMenuData = {
  a: {},
  b: {
    defaultOpenKeys: ['sub1'],
    subMenu: [
      {
      key: 'sub1',
        icon: 'barcode',
        title: '票务管理',
        children: [
          {
          key: 'b1',
            pathkey: '/ticket/list',
            title: '票务列表'
          },
          {
          key: 'b2',
            pathkey: '/ticket/add',
            title: '票务新建'
          },
          {
          key: 'b3',
            pathkey: '/ticket/edit',
            title: '票务编辑'
          },
        ]
      }
    ]
  },
  c: {
    defaultOpenKeys: [],
    subMenu: [
      {
        key: 'c1',
        path: '/order/list',
        icon: 'order',
        title: '订单列表'
      },
      {
        key: 'c2',
        path: '/order/after-sale-list',
        icon: 'order',
        title: '售后订单'
      }
    ]
  },
  d: {
    defaultOpenKeys: [],
    subMenu: [
      {
        key: 'd1',
        path: '/statistics/order',
        icon: 'area-chart',
        title: '订单统计'
      },
      {
        key: 'd2',
        path: '/statistics/after-sale',
        icon: 'area-chart',
        title: '售后订单'
      },
      {
        key: 'd3',
        path: '/statistics/ticket-check',
        icon: 'area-chart',
        title: '验票统计'
      }
    ]
  },
  e: {
    defaultOpenKeys: ['sub1', 'sub2'],
    subMenu: [
      {
      key: 'sub1',
        icon: 'setting',
        title: '基础设置',
        children: [
          {
            key: 'e1',
            path: '/setting/basic/shop-info',
            title: '商户信息设置'
          },
          {
            key: 'e2',
            path: '/setting/basic/test',
            title: '购票协议设置'
          },
          {
            key: 'e3',
            path: '/setting/basic/custom-page',
            title: '页面设置'
          },
          {
            key: 'e4',
            path: '/setting/basic/entry',
            title: '入口设置'
          },
          {
            key: 'e5',
            path: '/setting/basic/sms',
            title: '短信设置'
          },
        ]
      },
      {
      key: 'sub2',
        icon: 'contacts',
        title: '小程序',
        children: [
          {
            key: 'e6',
            path: '/setting/wxmini/auth',
            title: '授权设置'
          },
          {
            key: 'e7',
            path: '/setting/wxmini/message',
            title: '消息配置'
          },
        ]
      }
    ]
  }
}

export default sideMenuData