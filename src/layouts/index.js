import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import CoverImage from '../../markdown/assets/cover-photo@2x.png'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import theme from './theme';

import { Body } from '../components/Styled'
import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  @font-face{
      font-family:"Avenir LT W01_65 Medium1475532";
      src:url(${withPrefix("/fonts/e0542193-b2e6-4273-bc45-39d4dfd3c15b.eot?#iefix")});
      src:url(${withPrefix("fonts/e0542193-b2e6-4273-bc45-39d4dfd3c15b.eot?#iefix")}) format("eot"),url(${withPrefix("fonts/17b90ef5-b63f-457b-a981-503bb7afe3c0.woff2")}) format("woff2"),url(${withPrefix("fonts/c9aeeabd-dd65-491d-b4be-3e0db9ae47a0.woff")}) format("woff"),url(${withPrefix("fonts/25f994de-d13f-4a5d-a82b-bf925a1e054d.ttf")}) format("truetype"),url(${withPrefix("fonts/3604edbd-784e-4ca7-b978-18836469c62d.svg#3604edbd-784e-4ca7-b978-18836469c62d")}) format("svg");
  }
  @font-face{
      font-family:"Avenir LT W01_95 Black1475556";
      src:url(${withPrefix("fonts/f55e4498-ad48-4577-93a0-c614de5cbbb8.eot?#iefix")});
      src:url(${withPrefix("fonts/f55e4498-ad48-4577-93a0-c614de5cbbb8.eot?#iefix")}) format("eot"),url(${withPrefix("fonts/c78eb7af-a1c8-4892-974b-52379646fef4.woff2")}) format("woff2"),url(${withPrefix("fonts/75b36c58-2a02-4057-a537-09af0832ae46.woff")}) format("woff"),url(${withPrefix("fonts/b5c44a82-eeb8-41de-9c3f-a8db50b24b8a.ttf")}) format("truetype"),url(${withPrefix("fonts/93603a74-2be0-436c-83e1-68f9ef616eaf.svg#93603a74-2be0-436c-83e1-68f9ef616eaf")}) format("svg");
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: visible;
  }
`

const TemplateWrapper = ({ children, data }) => <ThemeProvider theme={theme}>
  <Body>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'service jam, liverpool, service design, hackathon' },
        { property: "og:title", content: data.site.siteMetadata.title },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://liverpoolservicejam.uk" },
        { property: "og:image", content: CoverImage }
      ]}
    />
    <Header {...data.site.siteMetadata} />
    {children()}
    <Footer {...data.site.siteMetadata} />
  </Body>
</ThemeProvider>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        medium
        email
        twitter
        instagram
      }
    }
  }
`

export default TemplateWrapper
