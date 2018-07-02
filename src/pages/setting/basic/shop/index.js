import React, { Component } from 'react'
import { Button, Modal, Radio } from 'antd'
import './index.less'

const RadioGroup = Radio.Group

// 用来玩儿antd的
class Basic extends Component {
  state = { 
    visible: false,
    value: 2
  }
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    })
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    })
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <br/>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Basic
