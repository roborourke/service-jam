import React from 'react'
import styled, { keyframes } from 'styled-components'

// article: https://raygun.io/blog/2014/07/making-svg-html-burger-button/

const rotateOut = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const rotateIn = keyframes`
  0% {
    transform: rotate(360deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const dashIn = keyframes`
  0% {
    stroke-dashoffset: 240;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const dashOut = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 240;
  }
`
const bunTopOut = keyframes`
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    top: 0;
    transform: rotate(15deg);
  }
  80% {
    left: -5px;
    top: 0;
    transform: rotate(-60deg);
  }
  100% {
    left: -5px;
    top: 1px;
    transform: rotate(-45deg);
  }
`

const bunBotOut = keyframes`
  0% {
    left: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    transform: rotate(-15deg);
  }
  80% {
    left: -5px;
    transform: rotate(60deg);
  }
  100% {
    left: -5px;
    transform: rotate(45deg);
  }
`

const bunTopIn = keyframes`
  0% {
    left: -5px;
    bot: 0;
    transform: rotate(-45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(-60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(15deg);
  }
  100% {
    left: 0;
    bot: 1px;
    transform: rotate(0deg);
  }
`

const bunBotIn = keyframes`
  0% {
    left: -5px;
    transform: rotate(45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(-15deg);
  }
  100% {
    left: 0;
    transform: rotate(0deg);
  }
`

const burgerFillIn = keyframes`
  0% {
    width: 0;
    left: 36px;
  }
  40% {
    width: 0;
    left: 40px;
  }
  80% {
    width: 36px;
    left: -6px;
  }
  100% {
    width: 36px;
    left: 0px;
  }
`

const burgerFillOut = keyframes`
  0% {
    width: 36px;
    left: 0px;
  }
  20% {
    width: 42px;
    left: -6px;
  }

  40% {
    width: 0;
    left: 40px;
  }

  100% {
    width: 0;
    left: 36px;
  }
`

const Hamburger = styled.div`
> *,
> *:before,
> *:after {
  box-sizing: border-box;
}

transform: scale(${props => props.scale || 1});
margin: 40px auto;
position: relative;
display: block;
width: 68px;
height: 68px;
-webkit-touch-callout: none;
user-select: none;
box-sizing: border-box;
cursor: pointer;
background: ${props => props.theme.colours.darkBlue};
border-radius: 300px;

${'' /* // transition mask */}
.path-burger {
  position: absolute;
  top: 0;
  left: 0;
  height: 68px;
  width: 68px;
  ${'' /* // two masks because... browser support. */}
  mask: url(#mask);
  -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
}

.animate-path {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
}

${'' /* // what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating */}
.path-rotation {
  height: 34px;
  width: 34px;
  margin: 34px 34px 0 0;
  transform: rotate(0deg);
  transform-origin: 100% 0;
  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 34px;
    margin: 0 4px 0 0;
    background: ${props => props.theme.colours.white};
  }
}

${'' /* // offset moves
// dasharray is the dash size
// need to be able to control dash space size. */}

&.is-open {
  .path {
    animation: ${dashIn} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
  .animate-path {
    animation: ${rotateIn} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}

&.is-closed {
  .path {
    animation: ${dashOut} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
  .animate-path {
    animation: ${rotateOut} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}

.path {
  stroke-dasharray: 240;
  stroke-dashoffset: 240;
  stroke-linejoin: round;
}


${'' /* // All good burgers need filling! */}

.burger-icon {
  position: absolute;
  padding: 20px 16px;
  height: 68px;
  width: 68px;
}

.burger-container {
  position: relative;
  height: 28px;
  width: 36px;
}

.burger-bun-top,
.burger-bun-bot,
.burger-filling {
  position: absolute;
  display: block;
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: ${props => props.theme.colours.white};
}

.burger-bun-top {
  top: 0;
  transform-origin: 34px 2px;
}

.burger-bun-bot {
  bottom: 0;
  transform-origin: 34px 2px;
}

${'' /* // relative parent is the button */}
.burger-filling {
  top: 12px;
}


${'' /* // burger ring container */}
.burger-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
}

.svg-ring {
  width: 68px;
  height: 68px;
}


${'' /* // bun animations */}
&.is-open {
  .burger-bun-top {
    animation: ${bunTopOut} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
  .burger-bun-bot {
    animation: ${bunBotOut} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}
&.is-closed {
  .burger-bun-top {
    animation: ${bunTopIn} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
  .burger-bun-bot {
    animation: ${bunBotIn} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}

${'' /* // burger filling */}
&.is-open {
  .burger-filling {
    animation: ${burgerFillOut} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}

&.is-closed {
  .burger-filling {
    animation: ${burgerFillIn} ${props => props.animationSpeed || '0.6s'} linear normal;
    animation-fill-mode:forwards;
  }
}
`

const MenuIcon = props => <Hamburger className={`hamburglar ${props.open !== null && (props.open ? 'is-open' : 'is-closed')}`} {...props}>
  <div className="burger-icon">
    <div className="burger-container">
      <span className="burger-bun-top"></span>
      <span className="burger-filling"></span>
      <span className="burger-bun-bot"></span>
    </div>
  </div>
  <div className="burger-ring">
    <svg className="svg-ring">
      <path className="path" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
    </svg>
  </div>
	<svg width="0" height="0">
    <mask id="mask">
      <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
    </mask>
  </svg>
  <div className="path-burger">
    <div className="animate-path">
      <div className="path-rotation"></div>
    </div>
  </div>
</Hamburger>

export default MenuIcon
