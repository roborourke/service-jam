import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoaderBar = styled.div`
  border: 3px solid ${props => props.theme.colours.white};
  border-radius: 100px;
  height: 40px;
  box-sizing: border-box;
  padding: 3px;
  max-width: 200px;
  width: 80%;
  margin: 10vh auto 10px auto;
`

const LoaderProgressAnim = keyframes`
  0% {
    width: 10%;
  }
  100% {
    width: 100%;
  }
`

const LoaderProgress = styled.div`
  background: ${props => props.theme.colours.green};
  width: 10%;
  min-width: 28px;
  height: 28px;
  border-radius: 100px;
  box-sizing: border-box;
  animation: 2s infinite ${LoaderProgressAnim} ease-out;
`

const Loader = () => <LoaderBar>
  <LoaderProgress />
</LoaderBar>

export default Loader
