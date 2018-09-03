import React, { Component } from 'react'
import styled from 'styled-components'
import Photo from '../Photo'
import GridArea from '../Shared/GridArea'

const SGridArea = styled(GridArea)`
 justify-items: center;
 padding: 60px;
 background-color: #fafafa;
`
const PhotoWall = props => {
  const { posts } = props
  return (
    <SGridArea templateColumns={'1fr 1fr 1fr 1fr'} gridGap={'15px'}>
      {posts.map((post, index) => (
        <Photo key={index} post={post} removePhoto={props.removePhoto} />
      ))}
    </SGridArea>
  )
}

export default PhotoWall
