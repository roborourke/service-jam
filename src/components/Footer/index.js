import React from 'react'
import styled from 'styled-components'
import { H3, P, Link, Container } from '../Styled'
import { SimpleMenu } from '../Menu'
import SocialLinks from '../Menu/SocialLinks'

const FooterContainer = styled(Container)`
  overflow: hidden;
  padding: 40px 0;
  .footer-menu ul {
    @media screen and (min-width: 600px) {
      float: right;
    }
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
  <FooterContainer scheme="dark" as="footer">
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
