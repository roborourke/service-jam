import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { H3, parse } from '../Styled'
import remark from 'remark'
import html from 'remark-html'
import { lighten } from 'polished'

const MemberBox = styled.div`
  img {
      max-width: 100%;
      height: auto;
      display: block;
  }
  p {
    font-size: 14px;
    color: ${props => lighten(.4, props.theme.colours.black)};
  }
`

const Bio = styled.div`
  font-size: 14px;
`

const getHTML = markdown => parse(
  remark()
    .use(html)
    .processSync(markdown)
  )

const Member = props => <MemberBox className="column">
  { props.image && <Img sizes={props.image.resized.sizes} alt={props.name} fadeIn /> }
  <H3 margins={{bottom: '.5em'}}>{props.name}</H3>
  <Bio>{getHTML(props.bio)}</Bio>
</MemberBox>

export default Member
