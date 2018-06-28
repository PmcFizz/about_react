/**
 * 测试案例
 */
import React, { Component } from 'react'
import '../style/test_item.css'

class TestItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: this.props.option.question
    }
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value})
  }

  saveData(){
    console.log(this.props.option)
  }

  removeItem(){
    console.log(this.props.index)
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
        <button className="button" onClick={this.saveData.bind(this)}>保存</button>
        <button className="button" onClick={this.removeItem.bind(this)}>移除</button>

      </div>
    )
  }
}

export default TestItem
