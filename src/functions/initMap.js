import mapboxgl from "mapbox-gl";
import { color } from "../styles/settings";
import pin from "../img/pin.png";

export default function initMap(map, climbs) {
  map.on("load", () => {
    map.addControl(new mapboxgl.AttributionControl({ compact: true }));

    map.addSource("climbs", {
      type: "geojson",
      data: climbs,
      cluster: true,
      clusterMaxZoom: 12,
    });

    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "climbs",
      filter: ["has", "point_count"],
      paint: {
        "circle-color": color.cluster,
        "circle-radius": 18,
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
        "text-color": color.type,
      },
    });

    map.loadImage(pin, (error, image) => {
      if (error) throw error;
      map.addImage("pin", image);
    });

    map.addLayer({
      id: "climb",
      type: "symbol",
      source: "climbs",
      filter: ["!", ["has", "point_count"]],
      layout: {
        "icon-image": "pin",
        "icon-size": 0.25,
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
      const { name } = e.features[0].properties;

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<h3>${name}</h3>`)
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
