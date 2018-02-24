import React from 'react'
import { Container, H1, P } from '../components/Styled'

const NotFoundPage = () => (
  <Container scheme="green">
    <Container constrain="600px" pad>
      <H1>NOT FOUND</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
    </Container>
  </Container>
)

export default NotFoundPage
