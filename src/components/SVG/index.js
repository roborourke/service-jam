import React from 'react'
import styled, { css } from 'styled-components'
import _JamLogo from './JamLogo.svg'
import _Instagram from './Instagram.svg'
import _Medium from './Medium.svg'
import _Twitter from './Twitter.svg'

export const JamLogo = _JamLogo
export const Instagram = _Instagram
export const Medium = _Medium
export const Twitter = _Twitter

const small = css`
  width: 20px;
  height: auto;
  fill: ${props => ( props.colour && props.theme.colours[ props.colour ] ) || props.theme.colours.white};
`

export const SmallMedium = styled(Medium)`
  ${small}
`
export const SmallTwitter = styled(Twitter)`
  ${small}
`
export const SmallInstagram = styled(Instagram)`
  ${small}
`
