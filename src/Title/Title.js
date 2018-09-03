import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const STypography = styled(Typography)`
     display: grid;
 padding: 10px;
 justify-content: center;
`

const Title = props => {
  const { title } = props
  return (
    <STypography variant='display4'>
      {title}
    </STypography>
  )
}
export default Title
