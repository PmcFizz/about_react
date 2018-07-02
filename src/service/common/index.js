import fetch from 'src/util/fetch'

// 获取数据
const fetchShopInfo = params => fetch('GET', '/shop/basic', params)

// 获取列表
const fetchList = params => fetch('GET', '/ticket/list', params)

export {
  fetchShopInfo,
  fetchList
}