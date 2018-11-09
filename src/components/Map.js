import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements, color, font } from "../styles/settings";
import initMap from "../functions/initMap";

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${measurements.headerHeight});
  .mapboxgl-popup {
    width: 200px;
  }
  .mapboxgl-popup-tip {
    border-top-color: ${color.background};
    border-bottom-color: ${color.background};
  }
  .mapboxgl-popup-anchor-left {
    .mapboxgl-popup-tip {
      border-color: transparent;
      border-right-color: ${color.background};
    }
  }
  .mapboxgl-popup-anchor-right {
    .mapboxgl-popup-tip {
      border-color: transparent;
      border-left-color: ${color.background};
    }
  }
  .mapboxgl-popup-content {
    background-color: ${color.background};
    border-radius: 0;
    padding: calc(${measurements.contentMargin} / 4);
    font-family: ${font.sans};
    p {
      margin: 0;
    }
    .cat {
      color: ${color.highlight};
    }
  }
  .mapboxgl-popup-close-button {
    padding: 0.25rem;
    font-size: 1.25rem;
    line-height: 1;
    color: ${color.type};
    border-bottom-left-radius: ${measurements.radius};
  }
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
