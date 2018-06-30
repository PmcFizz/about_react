import React, { Component } from 'react'
import '../style/add_item.css'
import add from '../svg/add.svg'

class AddItem extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="add_item" onClick={this.props.clickAddBtn}>
        <img src={add} className="add-item" alt="添加一项"/>
      </div>
    )
  }
}

export default AddItem