/**
 * 测试案例
 */
import React, { Component } from 'react'
import '../style/test_item.css'

class TestItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: this.props.option.question,
      answer: this.props.option.answer,
      selectA: this.props.option.A,
      selectB: this.props.option.B,
      selectC: this.props.option.C,
      selectD: this.props.option.D,
    }
  }

  saveData () {
    console.log(this.state)
    this.props.handleSaveData(99)
  }

  removeItem () {
    this.props.handleRemoveData(this.props.index)
  }

  changeRadio (e) {
    this.setState({answer: e.target.value})
  }

  changeSelect (e) {
    let select = e.target.dataset.key
    let obj = {}
    obj[select] = e.target.value
    this.setState(obj)
  }

  render () {
    return (
      <div className="test_item">
        <div className="form_item">
          <label className="label">问题： </label>
          <input className="input" data-key="question" defaultValue={this.props.option.question}
                 onChange={this.changeSelect.bind(this)}/>
        </div>
        <div className="form_item">
          <span className="label">答案：</span>
          <label className="answer_radio"><input type="radio" value="A" onChange={this.changeRadio.bind(this)}
                                                 defaultChecked={this.props.option.answer === 'A' ? true : false}
                                                 name={this.props.index + 'answer'} className="input"/>A</label>
          <label className="answer_radio"><input type="radio" value="B" onChange={this.changeRadio.bind(this)}
                                                 defaultChecked={this.props.option.answer === 'B' ? true : false}
                                                 name={this.props.index + 'answer'} className="input"/>B</label>
          <label className="answer_radio"><input type="radio" value="C" onChange={this.changeRadio.bind(this)}
                                                 defaultChecked={this.props.option.answer === 'C' ? true : false}
                                                 name={this.props.index + 'answer'} className="input"/>C</label>
          <label className="answer_radio"><input type="radio" value="D" onChange={this.changeRadio.bind(this)}
                                                 defaultChecked={this.props.option.answer === 'D' ? true : false}
                                                 name={this.props.index + 'answer'} className="input"/>D</label>
        </div>

        <div className="form_item">
          <label className="label">A：</label>
          <input className="input" onChange={this.changeSelect.bind(this)} data-key="selectA"
                 defaultValue={this.props.option.A}/>
        </div>
        <div className="form_item">
          <label className="label">B：</label>
          <input className="input" onChange={this.changeSelect.bind(this)}  data-key="selectB"
                 defaultValue={this.props.option.B}/>
        </div>
        <div className="form_item">
          <label className="label">C：</label>
          <input className="input" onChange={this.changeSelect.bind(this)}  data-key="selectC"
                 defaultValue={this.props.option.C}/>
        </div>
        <div className="form_item">
          <label className="label">D：</label>
          <input className="input" onChange={this.changeSelect.bind(this)}  data-key="selectD"
                 defaultValue={this.props.option.D}/>
        </div>
        <button className="button" onClick={this.saveData.bind(this)}>保存</button>
        <button className="button" onClick={this.removeItem.bind(this)}>移除</button>

      </div>
    )
  }
}

export default TestItem
