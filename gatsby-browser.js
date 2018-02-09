/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import { anchorate } from 'anchorate'

exports.onRouteUpdate = (location) => {
  anchorate()
}
