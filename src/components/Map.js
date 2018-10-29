import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements } from "../styles/settings";
import climbs from "../data/climbs.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${measurements.headerHeight});
  .marker {
    background-color: #dd6969;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mapboxgl-popup {
    max-width: 200px;
  }
  .mapboxgl-popup-content {
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }
`;

class Map extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.AttributionControl({ compact: true }));

    climbs.features.forEach(marker => {
      const el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 10 }).setHTML(
            `<h3>${marker.properties.name}</h3>`
          )
        )
        .addTo(map);
    });

    const bounds = new mapboxgl.LngLatBounds();

    climbs.features.forEach(feature => {
      bounds.extend(feature.geometry.coordinates);
    });

    map.fitBounds(bounds, { padding: 50 });
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
