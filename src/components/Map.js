import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements } from "../styles/settings";
import initMap from "../functions/initMap";

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${measurements.headerHeight});
`;

class Map extends Component {
  async getClimbs(map) {
    // prettier-ignore
    const reqUrl = `https://api.mapbox.com/datasets/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_DATASET_ID}/features?access_token=${process.env.REACT_APP_MAPBOX_KEY}`;
    const climbs = await fetch(reqUrl).then(res => res.json());
    initMap(map, climbs);
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      attributionControl: false,
      center: [0, 51.479574],
      zoom: 5,
    });

    this.getClimbs(map);
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
