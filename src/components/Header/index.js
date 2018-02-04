import React from 'react'
import styled from 'styled-components'
import JamLogo from '../SVG/JamLogo.svg'

const HeaderContainer = styled.header`
  background: ${props => props.theme.colours.darkBlue};
  color: ${props => props.theme.colours.white};
`

const GridInner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.5em;
`

const HeaderLogo = styled(JamLogo)`
  width: 60px;
  height: auto;
  margin: 0 auto;
  display: block;
`

const Header = ({ title }) => (
  <HeaderContainer>
    <GridInner>
      <h1>
        <HeaderLogo title={title} />
      </h1>
    </GridInner>
  </HeaderContainer>
)

export default Header
