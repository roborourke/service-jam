import React from 'react'
import styled, { withComponent } from 'styled-components'
import { SmallMedium, SmallTwitter, SmallInstagram } from '../SVG/'
import { H2, H3, P, Link, Container } from '../Styled'
import { SimpleMenu } from '../Menu'
import SocialLinks from '../Menu/SocialLinks'

const FooterContainer = Container.withComponent('footer').extend`
  overflow: hidden;
  padding: 40px 0;
  .footer-menu ul {
    float: right;
    font-size: 120%;
    li {
      display: block;
      margin-bottom: 1em;
    }
    a {
      color: ${props => props.theme.colours.white};
    }
  }
`

const Footer = props => (
  <FooterContainer scheme="dark">
    <Container constrain pad columns>
      <div className="footer-links">
        <H3 margins={{top: '0px'}}>Any questions?</H3>
        <P margins={{top: '1.2em', bottom: '4.5em'}}><Link href={`mailto:${props.email}`} inherit>{props.email}</Link></P>

        <SocialLinks {...props} />
      </div>
      <div className="footer-menu">
        <SimpleMenu />
      </div>
    </Container>
  </FooterContainer>
)

export default Footer
