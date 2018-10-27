import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Reset from "../styles/Reset.js";
import MapContainer from "../styles/MapContainer";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Map extends Component {
  state = {
    center: [6.536751, 45.20945],
    zoom: 10,
  };

  componentDidMount() {
    const { center, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      center,
      zoom,
      attributionControl: false,
    });

    map.on("moveend", () => {
      this.setState({
        center: Object.values(map.getCenter()),
        zoom: map.getZoom(),
      });
    });

    map.addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      })
    );
  }

  render() {
    return (
      <>
        <Reset />
        <MapContainer ref={el => (this.mapContainer = el)} />
      </>
    );
  }
}

export default Map;
