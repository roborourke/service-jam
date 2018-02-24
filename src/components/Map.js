import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Location = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCPzfzNgxe3Xjum7TvDoUzcP-RJL2QRSsQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom || 16}
    defaultCenter={props.coords || { lat: -34.397, lng: 150.644 }}
  >
    <Marker position={props.coords || { lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)

export default Location
