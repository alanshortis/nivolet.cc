import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
`;

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

    map.addControl(new mapboxgl.AttributionControl({ compact: true }));
  }

  render() {
    return <MapContainer ref={el => (this.mapContainer = el)} />;
  }
}

export default Map;
