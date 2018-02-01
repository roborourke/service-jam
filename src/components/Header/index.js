import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: blue
`

const GridInner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.5rem
`

const Header = ({ title }) => (
  <HeaderContainer>
    <GridInner>
      <h1>
        {title}
      </h1>
    </GridInner>
  </HeaderContainer>
)

export default Header
