import React, { Component } from 'react'
import CardFrame from '../Card'

export default class Photo extends Component {
  render () {
    const { post } = this.props
    return <CardFrame post={post} />
  }
}
