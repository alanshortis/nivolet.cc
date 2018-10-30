import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements, color } from "../styles/settings";
import climbs from "../data/climbs.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${measurements.headerHeight});
`;

class Map extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      attributionControl: false,
    });

    map.on("load", () => {
      map.addControl(new mapboxgl.AttributionControl({ compact: true }));

      map.addSource("climbs", {
        type: "geojson",
        data: climbs,
        cluster: true,
        clusterMaxZoom: 14,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "climbs",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": color.complement,
          "circle-radius": 20,
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "climbs",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 14,
        },
        paint: {
          "text-color": color.typeLight,
        },
      });

      map.addLayer({
        id: "climb",
        type: "circle",
        source: "climbs",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": color.highlight,
          "circle-radius": 5,
        },
      });

      // Handle clicks of clusters.
      map.on("click", "clusters", e => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties.cluster_id;
        map
          .getSource("climbs")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      // Change the cursor to a pointer over clusters and climbs.
      map.on("mousemove", e => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["climb", "clusters"],
        });
        map.getCanvas().style.cursor = features.length ? "pointer" : "";
      });

      // Show a popup with the climb name on click.
      map.on("click", "climb", e => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = `<h3>${e.features[0].properties.name}</h3>`;

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(name)
          .addTo(map);
      });

      // Fit map to bounds of climb locations.
      const bounds = new mapboxgl.LngLatBounds();
      climbs.features.forEach(feature => {
        bounds.extend(feature.geometry.coordinates);
      });
      map.fitBounds(bounds, { padding: 50 });
    });
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
