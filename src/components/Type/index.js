import React from 'react'
import styled, { css } from 'styled-components'

export const Align = css`
  text-align: ${props => props.align || 'left'};
  ${props => props.align && props.align === 'center' && 'margin-left: auto; margin-right: auto;'}
`

export const Large = css`
  font-size: 72px;
  line-height: 96px;
  font-family: ${props => props.theme.fonts.weights.medium};
`

export const Margins = css`
  ${props => props.margins.top && `margin-top: ${props.margins.top};`}
  ${props => props.margins.bottom && `margin-bottom: ${props.margins.bottom};`}
  ${props => props.margins.left && `margin-left: ${props.margins.left};`}
  ${props => props.margins.right && `margin-top: ${props.margins.right};`}
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
  margin: 0;
  ${Align}
  ${props => props.large && Large}
  ${props => props.margins && Margins}
`
export const H2 = styled.h2`
  font-size: ${props => props.theme.fonts.sizes.h2.size};
  line-height: ${props => props.theme.fonts.sizes.h2.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h2.weight]}, sans-serif;
  margin: 0;
  ${Align}
  ${props => props.large && Large}
  ${props => props.margins && Margins}
`
export const H3 = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.h3.size};
  line-height: ${props => props.theme.fonts.sizes.h3.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.h2.weight]}, sans-serif;
  margin: 0;
  ${Align}
  ${props => props.large && Large}
  ${props => props.margins && Margins}
`
export const P = styled.p`
  font-size: ${props => props.theme.fonts.sizes.p.size};
  line-height: ${props => props.theme.fonts.sizes.p.leading};
  font-family: ${props => props.theme.fonts.weights[props.theme.fonts.sizes.p.weight]}, sans-serif;
  margin: 0;
  ${Align}
  ${props => props.large && Large}
  ${props => props.margins && Margins}
`
