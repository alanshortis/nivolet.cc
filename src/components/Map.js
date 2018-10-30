import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements } from "../styles/settings";
import climbs from "../data/climbs.json";
import initMap from "../functions/initMap";

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${measurements.headerHeight});
`;

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      attributionControl: false,
    });

    initMap(map, climbs);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Nivolet &middot; Map</title>
        </Helmet>
        <MapContainer ref={el => (this.mapContainer = el)} />
      </>
    );
  }
}

export default Map;
