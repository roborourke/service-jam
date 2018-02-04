import React from 'react'
import styled, { css } from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

const transform = ( element ) => {
  switch ( element.type ) {
    case 'h1': return <H1>{element.props.children}</H1>
    case 'h2': return <H2>{element.props.children}</H2>
    case 'h3': return <H3>{element.props.children}</H3>
    case 'p': return <P>{element.props.children}</P>
    default: return element
  }
}

export const parse = html => {
  const elements = ReactHtmlParser(html)
  return elements.map( element => transform( element ) )
}

export const Align = css`
  ${props => `text-align: ${props.align};`}
  ${props => props.align === 'center' && 'margin-left: auto; margin-right: auto;'}
`

export const Large = css`
  font-size: 56px;
  line-height: 63px;
  font-family: ${props => props.theme.fonts.weights.medium};
`

export const Margins = css`
  ${props => props.margins.top && `margin-top: ${props.margins.top};`}
  ${props => props.margins.bottom && `margin-bottom: ${props.margins.bottom};`}
  ${props => props.margins.left && `margin-left: ${props.margins.left};`}
  ${props => props.margins.right && `margin-top: ${props.margins.right};`}
`

export const Constrain = css`
  ${props => props.constrain && `max-width: ${props.constrain};`}
`

const mixins = css`
  ${props => props.align && Align}
  ${props => props.large && Large}
  ${props => props.margins && Margins}
  ${props => props.constrain && Constrain}
`

export const Body = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.colours.darkBlue};
  color: ${props => props.theme.colours.white};
  font-size: ${props => props.theme.fonts.sizes.body.size};
  line-height: ${props => props.theme.fonts.sizes.body.leading};
  font-family: Avenir, ${props => props.theme.fonts.weights[props.theme.fonts.sizes.body.weight]}, "Avenir Next", sans-serif;
`
export const H1 = styled.h1`
  font-size: ${props => props.theme.fonts.sizes.h1.size};
  line-height: ${props => props.theme.fonts.sizes.h1.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h1.weight]}, sans-serif;
  margin: 1em 0;
  ${mixins}
`
export const H2 = styled.h2`
  font-size: ${props => props.theme.fonts.sizes.h2.size};
  line-height: ${props => props.theme.fonts.sizes.h2.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h2.weight]}, sans-serif;
  margin: 1em 0;
  ${mixins}
`
export const H3 = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.h3.size};
  line-height: ${props => props.theme.fonts.sizes.h3.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h2.weight]}, sans-serif;
  margin: 1em 0;
  ${mixins}
`
export const P = styled.p`
  font-size: ${props => props.theme.fonts.sizes.p.size};
  line-height: ${props => props.theme.fonts.sizes.p.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.p.weight]}, sans-serif;
  margin: 1em 0;
  ${mixins}
`

export const Link = styled.a`
  color: ${props => props.theme.colours.green};
  text-decoration: underline;
`

export const Button = styled.button`
  padding: .25em 40px;
  display: inline-block;
  margin: 1em 0;
  font-family: ${props => props.theme.fonts.weights.black};
  font-size: 24px;
  background: ${props => props.theme.colours.green};
  color: ${props => props.theme.colours.darkBlue};
  cursor: pointer;
`

export const ButtonLink = Button.withComponent('a')

export const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.pad || '1em 20px'};
  box-sizing: border-box;
  overflow: hidden;
  ${mixins}
`
