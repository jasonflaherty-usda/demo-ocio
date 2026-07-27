import React from "react";
import { parcels } from "./parcels";
import "./styles.css";

function calculateScore(parcel) {
  let score = 0;

  if (parcel.nearRoad) score += 2;
  if (parcel.floodRisk === "Low") score += 3;
  if (parcel.floodRisk === "Medium") score += 1;
  if (parcel.floodRisk === "High") score -= 2;
  if (parcel.landUse === "Agriculture") score += 1;
  if (parcel.protectedLand) score -= 3;

  return score;
}

function getRating(score) {
  if (score >= 4) return "High Suitability";
  if (score >= 1) return "Moderate Suitability";
  return "Low Suitability";
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Land Parcel Scorecard</h1>
        <p>
          A simple demo app that evaluates mock land parcels using basic
          suitability rules.
        </p>
      </section>

      <section className="grid">
        {parcels.map((parcel) => {
          const score = calculateScore(parcel);
          const rating = getRating(score);

          return (
            <article className="card" key={parcel.id}>
              <h2>{parcel.name}</h2>
              <p className="parcel-id">{parcel.id}</p>

              <ul>
                <li>
                  <strong>Acres:</strong> {parcel.acres}
                </li>
                <li>
                  <strong>Land Use:</strong> {parcel.landUse}
                </li>
                <li>
                  <strong>Flood Risk:</strong> {parcel.floodRisk}
                </li>
                <li>
                  <strong>Near Road:</strong> {parcel.nearRoad ? "Yes" : "No"}
                </li>
                <li>
                  <strong>Protected Land:</strong>{" "}
                  {parcel.protectedLand ? "Yes" : "No"}
                </li>
              </ul>

              <div className="score">
                <span>Score: {score}</span>
                <strong>{rating}</strong>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
