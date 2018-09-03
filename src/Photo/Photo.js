import React from 'react'
import CardFrame from '../Card'

const Photo = props => {
  const { post } = props
  return <CardFrame post={post} removePhoto={props.removePhoto} />
}

export default Photo
