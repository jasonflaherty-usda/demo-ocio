import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App, { getFillColor } from "./App";

vi.mock("react-leaflet", () => {
  const React = require("react");

  return {
    MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
    Polygon: ({ children, eventHandlers }) => <button type="button" onClick={eventHandlers?.click}>{children}</button>,
    Popup: ({ children }) => <div>{children}</div>,
    TileLayer: () => null,
  };
});

describe("App", () => {
  it("renders the hero section and legend", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /forest canopy explorer/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/canopy density legend/i)).toBeInTheDocument();
    expect(screen.getByText(/high \(80%\+\)/i)).toBeInTheDocument();
  });

  it("opens the details modal when a stand is clicked", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /cedar ridge/i }));

    expect(screen.getByRole("heading", { name: /cedar ridge/i })).toBeInTheDocument();
    expect(screen.getByText(/western red cedar/i, { selector: "p.modal-subtitle" })).toBeInTheDocument();
    expect(screen.getByText(/canopy density:/i)).toBeInTheDocument();
    expect(screen.getByText(/management:/i)).toBeInTheDocument();
  });

  it("closes the details modal when the close button is clicked", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /cedar ridge/i }));
    fireEvent.click(screen.getByRole("button", { name: /×/i }));

    expect(screen.queryByText(/management:/i)).not.toBeInTheDocument();
  });

  it("returns the expected fill color for canopy density thresholds", () => {
    expect(getFillColor(0.85)).toBe("#1f5f3c");
    expect(getFillColor(0.75)).toBe("#3d7b4f");
    expect(getFillColor(0.65)).toBe("#6a9f6a");
    expect(getFillColor(0.55)).toBe("#9fd39d");
  });
});
