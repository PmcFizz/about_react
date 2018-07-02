/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl : 路由地址域名
 *
 */
let baseUrl
let routerMode

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
  routerMode = 'history'
} else {
  baseUrl = '/api'
  routerMode = 'history'
}

export {baseUrl, routerMode}
