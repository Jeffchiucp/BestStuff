import React, { Component } from 'react';
import styles from "./style.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";

export class MapContainer extends Component {
  render() {
    var latitude = this.props.lat;
    var longitude = this.props.lng;
    if (!this.props.loaded) {
      return <div> Loading... </div>
    }
    return (
      <Map
        google={this.props.google}
        zoom={15}
        >
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS
})(MapContainer)
