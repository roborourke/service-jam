import React from 'react'
import styled from 'styled-components'
import JamLogo from '../SVG/JamLogo.svg'
import { Container } from '../Styled'
import BurgerMenu from '../Menu'

const HeaderContainer = styled.header`
  background: ${props => props.theme.colours.darkBlue};
  color: ${props => props.theme.colours.white};
`

const HeaderLogo = styled(JamLogo)`
  width: 140px;
  height: auto;
  margin: 0 auto;
  display: block;
`

const Header = ({ title }) => (
  <HeaderContainer>
    <Container pad>
      <HeaderLogo title={title} />
      <BurgerMenu />
    </Container>
  </HeaderContainer>
)

export default Header
