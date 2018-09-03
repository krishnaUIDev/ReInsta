import React, { Component } from 'react'
import Photo from '../Photo'

class PhotoWall extends Component {
  render () {
    const { posts } = this.props
    return (
      <div>

        {posts.map((post, index) => <Photo key={index} post={post} />)}

      </div>
    )
  }
}

export default PhotoWall
