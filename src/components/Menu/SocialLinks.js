import React from 'react'
import styled from 'styled-components'
import { SmallMedium, SmallTwitter, SmallInstagram } from '../SVG'

const StyledSocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: block;
  li {
    display: inline-block;
    margin: 0 20px 0 0;
  }
`

const SocialLinks = props => <StyledSocialLinks>
  { props.medium && <li>
    <a href={props.medium}>
      <SmallMedium />
    </a>
  </li> }
  { props.twitter && <li>
    <a href={props.twitter}>
      <SmallTwitter />
    </a>
  </li> }
  { props.instagram && <li>
    <a href={props.instagram}>
      <SmallInstagram />
    </a>
  </li> }
</StyledSocialLinks>

export default SocialLinks
