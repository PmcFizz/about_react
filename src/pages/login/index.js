import React, { Component } from 'react'
import {message, Form, Icon, Input, Button, Checkbox } from 'antd'
import { browserHistory } from 'react-router'
import './index.less'

const FormItem = Form.Item

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        sessionStorage.setItem('token', 1) // 模拟登录
        message.success('登录成功！', 1.5)
        browserHistory.push('/')
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="login-head"></div>
        <div className="login-body">
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账号!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const wrappedLoginForm = Form.create()(Login)

export default wrappedLoginForm