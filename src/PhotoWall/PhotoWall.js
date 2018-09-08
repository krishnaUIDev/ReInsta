import React, { Component } from 'react'
import styled from 'styled-components'
import Photo from '../Photo'
import GridArea from '../Shared/GridArea'
import { faCog } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton'

const SGridArea = styled(GridArea)`
 justify-items: center;
 padding: 60px;
 background-color: #fafafa;
`
const ToggleButton = styled.div`
  position: fixed;
  right: 0;
  width: 64px;
  background: rgba(0,0,0,.3);
  z-index: 1031;
  border-radius: 8px 0 0 8px;
  text-align: center;
  top: 120px;
`
const SFontAwesomeIcon = styled(FontAwesomeIcon)`
 padding: 10px 0;
 font-weight: 1.5em;
 color: white;
 transition: all .5s;
  cursor: pointer;
  &:hover {
  transform: rotate(360deg);
  }
`
export default class PhotoWall extends Component {
  render () {
    const { posts } = this.props
    var FilterTitle = posts.map(data => {
      return data.title
    })
    return (
      <div>
        <ToggleButton>
          <IconButton>
            <SFontAwesomeIcon icon={faCog} />
          </IconButton>
        </ToggleButton>
        <SGridArea templateColumns={'1fr 1fr 1fr 1fr'} gridGap={'15px'}>
          {posts.map((post, index) => (
            <Photo
              key={index}
              post={post}
              removePhoto={this.props.removePhoto}
            />
          ))}
        </SGridArea>
      </div>
    )
  }
}
