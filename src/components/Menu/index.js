import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styled'
import MenuIcon from './MenuIcon'
import { rgba } from 'polished'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = styled.nav`
  position: absolute;
  right: 20px;
  top: 20px;
  .hamburglar {
    position: fixed;
    z-index: 4;
    top: 20px;
    right: 5vw;
  }
`

const openAbout = () => {
  const button = document.querySelector('.open-about')
  button && button.click()
}

const MenuLinks = props => <ul {...props}>
  <li><AnchorLink href="#home">Home</AnchorLink></li>
  <li><AnchorLink href="#about" onClick={openAbout}>About</AnchorLink></li>
  <li><AnchorLink href="#event">Next event</AnchorLink></li>
  <li><AnchorLink href="#blog">Our thoughts</AnchorLink></li>
  <li><AnchorLink href="#the-team">Meet the team</AnchorLink></li>
</ul>

export const SimpleMenu = styled(MenuLinks)`
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    text-decoration: underline;
  }
`

const MainMenu = styled(MenuLinks)`
  list-style: none;
  padding: 10vh;
  font-size: 5vw;
  margin: 0;
  color: ${props => props.theme.colours.white};
  background: ${props => rgba(props.theme.colours.darkBlue, .9)};
  position: fixed;
  display: ${props => props.open ? 'block' : 'none'};
  left: 0; top: 0;
  right: 0; bottom: 0;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 3;
  li {
    margin-bottom: 2vh;
  }
  a {
    color: ${props => props.theme.colours.white};
  }
`

class BurgerMenu extends React.Component {
  render() {
    return <Nav className={this.state && this.state.open ? 'is-open' : ''}>
      <MenuIcon
        open={this.state ? this.state.open : null}
        onClick={() => this.setState({ open: !this.state || !this.state.open })}
        scale="2vw"
      />
      <MainMenu
        open={this.state && this.state.open}
        className="main-menu"
        onClick={event => event.target.nodeName === 'A' && this.setState({ open: false })}
      />
    </Nav>
  }
}

export default BurgerMenu
