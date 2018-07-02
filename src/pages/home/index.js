import React from 'react'
import './index.less'
import { Component } from 'react'
import { Carousel } from 'antd'

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div><img className="full" src="http://www.taopic.com/uploads/allimg/120821/214833-120R122421646.jpg" alt=""/></div>
          <div><img className="full" src="http://www.zhlzw.com/UploadFiles/Article_UploadFiles/201204/20120412123925693.jpg" alt=""/></div>
          <div><img className="full" src="http://img.taopic.com/uploads/allimg/120318/2379-12031P0135141.jpg" alt=""/></div>
          <div><img className="full" src="http://img01.taopic.com/150315/240447-15031510013210.jpg" alt=""/></div>
        </Carousel>
      </div>
    )
  }
}

export default Home
