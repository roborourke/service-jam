import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children, data }) => [
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: data.site.siteMetadata.description },
      { name: 'keywords', content: 'sample, something' },
    ]}
  />,
  <Header title={data.site.siteMetadata.title} />,
  children()
]

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default TemplateWrapper
