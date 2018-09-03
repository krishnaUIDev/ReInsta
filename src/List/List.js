import React, { Component } from 'react'

export default class List extends Component {
  render () {
    const { tasks } = this.props
    return (
      <div>
        {tasks.map((task, index) => <div key={index}> {task} </div>)}
      </div>
    )
  }
}
