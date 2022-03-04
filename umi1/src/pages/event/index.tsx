import React, { Component } from 'react'

export default class index extends Component {
    btnHandleClick = (id:number) => {
        console.log(23);
        console.log(id + 2);
    }
  render() {
    return (
      <div className="event">
          <h3>事件机制测试</h3>
          <button onClick={() => this.btnHandleClick(2)}>点击</button>
      </div>
    )
  }
}
