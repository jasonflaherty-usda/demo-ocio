import React, { useMemo, useState } from "react";
import { MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";
import { treeStands } from "./treeData";
import "leaflet/dist/leaflet.css";
import "./styles.css";

const densityLegend = [
  { label: "High (80%+)", color: "#1f5f3c" },
  { label: "Medium (70–79%)", color: "#3d7b4f" },
  { label: "Low (60–69%)", color: "#6a9f6a" },
  { label: "Sparse (<60%)", color: "#9fd39d" },
];

const DEFAULT_CENTER = [39.5, -98.35];
const DEFAULT_ZOOM = 4;

function App() {
  const [selectedStand, setSelectedStand] = useState(null);

  const featureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features: treeStands,
    }),
    []
  );

  return (
    <main className="page">
      <section className="hero">
        <h1>Forest Canopy Explorer</h1>
        <p>
          Tap any stand to view its tree type, canopy density, and stewardship notes.
        </p>
      </section>

      <section className="map-card">
        <div className="map-legend" aria-label="Canopy density legend">
          {densityLegend.map((item) => (
            <div className="legend-item" key={item.label}>
              <span className="legend-swatch" style={{ backgroundColor: item.color }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {featureCollection.features.map((feature) => {
            const { properties, geometry } = feature;
            const coordinates = geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);

            return (
              <Polygon
                key={properties.id}
                positions={coordinates}
                pathOptions={{
                  color: selectedStand?.id === properties.id ? "#f2c94c" : "#2f5d3a",
                  fillColor: getFillColor(properties.canopyDensity),
                  fillOpacity: selectedStand?.id === properties.id ? 0.85 : 0.6,
                  weight: selectedStand?.id === properties.id ? 4 : 2,
                  dashArray: selectedStand?.id === properties.id ? "6 6" : undefined,
                }}
                eventHandlers={{
                  click: () => setSelectedStand(properties),
                }}
              >
                <Popup>
                  <strong>{properties.name}</strong>
                  <br />
                  {properties.treeType}
                </Popup>
              </Polygon>
            );
          })}
        </MapContainer>
      </section>

      {selectedStand && (
        <div className="modal-backdrop" onClick={() => setSelectedStand(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedStand(null)}>
              ×
            </button>
            <h2>{selectedStand.name}</h2>
            <p className="modal-subtitle">{selectedStand.treeType}</p>
            <ul>
              <li>
                <strong>Canopy Density:</strong> {(selectedStand.canopyDensity * 100).toFixed(0)}%
              </li>
              <li>
                <strong>Age Class:</strong> {selectedStand.ageClass}
              </li>
              <li>
                <strong>Health:</strong> {selectedStand.health}
              </li>
            </ul>
            <p>{selectedStand.summary}</p>
            <p>
              <strong>Management:</strong> {selectedStand.management}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export function getFillColor(canopyDensity) {
  if (canopyDensity >= 0.8) return "#1f5f3c";
  if (canopyDensity >= 0.7) return "#3d7b4f";
  if (canopyDensity >= 0.6) return "#6a9f6a";
  return "#9fd39d";
}

export default App;
