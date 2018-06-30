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
      testArr: [{question: '1', answer: 'A', A: '1', B: '2', C: '3', D: '4'},
        {question: '2', answer: 'B', A: '2', B: '3', C: '4', D: '5'},
        {question: '3', answer: 'C', A: '3', B: '4', C: '5', D: '6'}]
    }
  }

  handleSaveData (index) {
    console.log('***' + index)
  }

  handleRemoveData (index) {
    let splArr = (arr, i) => {
      arr.splice(i, 1)
      console.log(arr)
      return arr
    }
    this.setState(prevState => ({
      testArr: splArr(prevState.testArr, index)
    }))
  }

  render () {
    return (
      <div className="test_manage">
        <h1 className="App-title">{this.state.title} {this.state.testArr[0].question}</h1>
        <div className="test_ul">
          {this.state.testArr.map((item, index) => {
            return (<TestItem handleSaveData={this.handleSaveData.bind(this)}
                              handleRemoveData={this.handleRemoveData.bind(this)}
                              option={item} index={index} key={item.question}></TestItem>)
          })}
        </div>
      </div>
    )
  }
}

export default TestManage
