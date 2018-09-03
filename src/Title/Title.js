import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'
import AppBar from '@material-ui/core/AppBar'

const STypography = styled(Typography)`
 display: grid;
 padding: 10px;
 justify-content: center;
`
const SAppBar = styled(AppBar)`
`

const Title = props => {
  const { title } = props
  return (
    <SAppBar position='static' color='white'>
      <STypography variant='display2'>
        {title}
      </STypography>
    </SAppBar>
  )
}
export default Title
