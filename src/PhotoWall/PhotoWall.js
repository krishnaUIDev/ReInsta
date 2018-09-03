import React, { Component } from 'react'
import styled from 'styled-components'
import Photo from '../Photo'
import GridArea from '../Shared/GridArea'

const SGridArea = styled(GridArea)`
 justify-items: center;
 padding: 60px;
 background-color: #fafafa;
`

const SButton = styled.div`
    position: fixed;
    right: 0;
    width: 64px;
    background: rgba(0,0,0,.3);
    z-index: 1031;
    border-radius: 8px 0 0 8px;
    text-align: center;
    top: 120px;
`

const PhotoWall = props => {
  const { posts } = props
  return (
    <div>
      <SButton>
        Change Theme
      </SButton>
      <SGridArea templateColumns={'1fr 1fr 1fr 1fr'} gridGap={'15px'}>
        {posts.map((post, index) => (
          <Photo key={index} post={post} removePhoto={props.removePhoto} />
        ))}
      </SGridArea>
    </div>
  )
}

export default PhotoWall
