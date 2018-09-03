import React from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'
import AppBar from '@material-ui/core/AppBar'
import GridArea from '../Shared/GridArea'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'

const SAppBar = styled(AppBar)`
border-bottom: 1px solid rgba(0,0,0,.0975);
`
const Header = styled.h1`

`
const Title = props => {
  const { title } = props
  return (
    <SAppBar position='static' color='white' style={{ boxShadow: 'none' }}>
      <GridArea
        templateColumns={'1fr 1fr 1fr'}
        style={{ alignItems: 'center' }}
      >
        <Header>
          {title}
        </Header>
        <div>
          <Grid container spacing={8} alignItems='flex-end'>
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id='input-with-icon-grid' label='Search here ...' />
            </Grid>
          </Grid>
        </div>
        <div>
          3
        </div>
      </GridArea>
    </SAppBar>
  )
}
export default Title
