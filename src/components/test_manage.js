/**
 * 测试管理
 */
import React, { Component } from 'react'
import '../style/test_manage.css'
import TestItem from './test_item'

class TestManage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'My Title',
      testArr: [{question: '1', anser: '', A: '', B: '', C: '', D: ''},
        {question: '2', anser: '', A: '', B: '', C: '', D: ''},
        {question: '3', anser: '', A: '', B: '', C: '', D: ''},
        {question: '4', anser: '', A: '', B: '', C: '', D: ''},
        {question: '5', anser: '', A: '', B: '', C: '', D: ''}]
    }
  }

  render () {
    return (
      <div className="test_manage">
        <h1 className="App-title">{this.state.title}</h1>
        <div className="test_ul">
          {this.state.testArr.map((item, index) => {
            return (<TestItem option={item} key={index}></TestItem>)
          })}
        </div>
      </div>
    )
  }
}

export default TestManage
