import React from 'react'
import styled, { css } from 'styled-components'
import ReactHtmlParser from 'react-html-parser'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const transform = ( element, idx ) => {
  switch ( element.type ) {
    case 'h1': return <H1 key={idx}>{element.props.children.map( transform )}</H1>
    case 'h2': return <H2 key={idx}>{element.props.children.map( transform )}</H2>
    case 'h3': return <H3 key={idx}>{element.props.children.map( transform )}</H3>
    case 'h4': return <H4 key={idx}>{element.props.children.map( transform )}</H4>
    case 'p': return <P key={idx}>{element.props.children.map( transform )}</P>
    case 'a': return <Link key={idx} {...element.props}>{element.props.children.map( transform )}</Link>
    case 'hr': return <HR key={idx} />
    case 'div': return <div key={idx} {...element.props}>{element.props.children.map( transform )}</div>
    default: return element
  }
}

export const parse = html => {
  const elements = ReactHtmlParser(html)
  return elements.map( transform )
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
  ${props => props.constrain && css`
    max-width: ${props.constrain === true ? '960px' : props.constrain};`}
`

export const Scheme = css`
  ${props => props.scheme && props.scheme === 'dark' && css`
    background: ${props.theme.colours.darkBlue};
    color: ${props.theme.colours.white};`}
  ${props => props.scheme && props.scheme === 'paleGreen' && css`
    background: ${props.theme.colours.paleGreen};
    color: ${props.theme.colours.black};
    h1, h2 {
      color: ${props.theme.colours.darkBlue};
    }
    a {
      color: ${props.theme.colours.darkBlue};
    }
    `}
  ${props => props.scheme && props.scheme === 'green' && css`
    background: ${props.theme.colours.green};
    color: ${props.theme.colours.darkBlue};
    h1, h2 {
      color: ${props.theme.colours.darkBlue};
    }
    a {
      color: ${props.theme.colours.darkBlue};
    }
    `}
  ${props => props.scheme && props.scheme === 'white' && css`
    background: ${props.theme.colours.white};
    color: ${props.theme.colours.black};`}
`

export const Columns = css`
  ${props => props.columns && css`
    display: flex;
    flex-wrap: wrap;
    ${props.pad && css`
      padding-left: 10px; padding-right: 10px;`}
    & > * {
      flex: 1;
      width: ${100 / (props.columns === true ? 2 : props.columns)}%;
      min-width: 200px;
      margin-left: 10px;
      margin-right: 10px;
    }`}
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
  background: ${props => props.theme.colours.white};
  color: ${props => props.theme.colours.black};
  font-size: ${props => props.theme.fonts.sizes.body.size};
  line-height: ${props => props.theme.fonts.sizes.body.leading};
  font-family: Avenir, ${props => props.theme.fonts.weights[props.theme.fonts.sizes.body.weight]}, "Avenir Next", sans-serif;

  .large-text > * {
    font-size: 120%;
  }
`
export const H1 = styled.h1`
  font-size: ${props => props.theme.fonts.sizes.h1.size};
  line-height: ${props => props.theme.fonts.sizes.h1.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h1.weight]}, sans-serif;
  margin: 1em 0 0;
  ${mixins}
`
export const H2 = styled.h2`
  font-size: ${props => props.theme.fonts.sizes.h2.size};
  line-height: ${props => props.theme.fonts.sizes.h2.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h2.weight]}, sans-serif;
  margin: 1em 0 0;
  ${mixins}
`
export const H3 = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.h3.size};
  line-height: ${props => props.theme.fonts.sizes.h3.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h3.weight]}, sans-serif;
  margin: 1em 0 0;
  ${mixins}
`
export const H4 = styled.h4`
  font-size: ${props => props.theme.fonts.sizes.h4.size};
  line-height: ${props => props.theme.fonts.sizes.h4.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h4.weight]}, sans-serif;
  margin: 1em 0 0;
  ${mixins}
`

export const P = styled.p`
  font-size: ${props => props.theme.fonts.sizes.p.size};
  line-height: ${props => props.theme.fonts.sizes.p.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.p.weight]}, sans-serif;
  margin: 0 0 1em;
  ${mixins}
`

export const HR = styled.hr`
  background: none;
  border: 0;
  border-top: 3px solid ${props => props.theme.colours.green};
  margin: 2em 0;
`

export const Link = styled.a`
  color: ${props => props.inherit ? 'inherit' : props.theme.colours.green};
  text-decoration: underline;
`

export const Button = styled.button`
  padding: .25em 50px;
  display: inline-block;
  margin: 1em 0;
  font-family: ${props => props.theme.fonts.weights.black};
  font-size: 24px;
  background: ${props => props.theme.colours.green};
  color: ${props => props.theme.colours.darkBlue};
  cursor: pointer;
  border: 0;
  text-decoration: none;
  svg {
    fill: ${props => props.theme.colours.darkBlue};
    vertical-align: sub;
    width: 1em;
    display: inline-block;
  }
`

export const ButtonLink = Button.withComponent('a')

export const ButtonAnchor = Button.withComponent(AnchorLink)

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
`

export const Container = styled.div`
  margin: 0 auto;
  ${props => props.pad && `padding: ${props.pad === true ? '1em 20px' : props.pad};`}
  box-sizing: border-box;
  ${mixins}
  ${Scheme}
  ${Columns}
`
