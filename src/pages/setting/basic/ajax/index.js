import React, { Component } from 'react'
import { fetchShopInfo } from 'src/service/common/index'

class Ajax extends Component {
  constructor (props) {
    super(props)
    this.testAjax = this.testAjax.bind(this)
  }
  testAjax(e) {
    fetchShopInfo({}).then((res) => {
      alert('ajax请求成功')
    })
  }
  render() {
    return (
      <button onClick={this.testAjax}>ajax请求测试</button>
    )
  }
}

export default Ajax
