import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${p => p.templateRows};
  grid-template-columns: ${p => p.templateColumns};
  grid-area: ${p => p.gridArea};
  grid-gap: ${p => p.gridGap};
`
const GridArea = props => {
  return <Grid {...props} />
}

export default GridArea
