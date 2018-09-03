import React, { Component } from 'react'
import styled from 'styled-components'
import Photo from '../Photo'
import GridArea from '../Shared/GridArea'

const SGridArea = styled(GridArea)`
 justify-items: center;
`
const PhotoWall = props => {
  const { posts } = props
  return (
    <SGridArea templateColumns={'1fr 1fr 1fr'}>
      {posts.map((post, index) => <Photo key={index} post={post} />)}
    </SGridArea>
  )
}

export default PhotoWall
