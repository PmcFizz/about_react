/**
 * 测试案例
 */
import React, { Component } from 'react'
import '../style/test_item.css'

class TestItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 12
    }
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value})
  }

  render () {
    return (
      <div className="test_item">
        <div className="form_item">
          <label className="label">问题： </label>
          <input className="input" value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="form_item">
          <span className="label">答案：</span>
          <label className="answer_radio"><input type="radio" name="answer" className="input"/>A</label>
          <label className="answer_radio"><input type="radio" name="answer" className="input"/>B</label>
          <label className="answer_radio"><input type="radio" name="answer" className="input"/>C</label>
          <label className="answer_radio"><input type="radio" name="answer" className="input"/>D</label>
        </div>

        <div className="form_item">
          <label className="label">A：</label>
          <input className="input"/>
        </div>
        <div className="form_item">
          <label className="label">B：</label>
          <input className="input"/>
        </div>
        <div className="form_item">
          <label className="label">C：</label>
          <input className="input"/>
        </div>
        <div className="form_item">
          <label className="label">D：</label>
          <input className="input"/>
        </div>
        <button className="button">保存</button>
        <button className="button">移除</button>

      </div>
    )
  }
}

export default TestItem
