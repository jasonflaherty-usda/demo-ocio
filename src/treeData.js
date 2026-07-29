export const treeStands = [
  {
    type: "Feature",
    properties: {
      id: "cedar-ridge",
      name: "Cedar Ridge",
      treeType: "Western Red Cedar",
      canopyDensity: 0.84,
      ageClass: "Mature",
      health: "Thriving",
      summary:
        "A dense coastal stand with layered canopies that shelter songbirds and moist-soil understory plants.",
      management: "Preserve the mature overstory and maintain seasonal monitoring.",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-123.3, 45.7],
          [-123.0, 45.7],
          [-123.0, 45.4],
          [-123.3, 45.4],
          [-123.3, 45.7],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "oak-hollow",
      name: "Oak Hollow",
      treeType: "White Oak",
      canopyDensity: 0.68,
      ageClass: "Mid-Successional",
      health: "Stable",
      summary:
        "A broadleaf stand with steady canopy closure and excellent habitat diversity for pollinators.",
      management: "Keep the understory open with periodic light thinning.",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-89.8, 38.9],
          [-89.4, 38.9],
          [-89.4, 38.6],
          [-89.8, 38.6],
          [-89.8, 38.9],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "pine-crest",
      name: "Pine Crest",
      treeType: "Loblolly Pine",
      canopyDensity: 0.78,
      ageClass: "Young Mature",
      health: "Healthy",
      summary:
        "A fast-growing conifer stand with strong canopy layering and moderate shade tolerance beneath.",
      management: "Use controlled burns on a long interval to reduce fuel buildup.",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-84.3, 32.6],
          [-83.9, 32.6],
          [-83.9, 32.3],
          [-84.3, 32.3],
          [-84.3, 32.6],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "spruce-plain",
      name: "Spruce Plain",
      treeType: "Engelmann Spruce",
      canopyDensity: 0.61,
      ageClass: "Overmature",
      health: "Watch",
      summary:
        "A high-elevation stand with scattered gaps where wind and snow have started to shape the canopy.",
      management: "Prioritize snag retention and low-impact access planning.",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-111.0, 39.8],
          [-110.6, 39.8],
          [-110.6, 39.4],
          [-111.0, 39.4],
          [-111.0, 39.8],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "maple-grove",
      name: "Maple Grove",
      treeType: "Sugar Maple",
      canopyDensity: 0.73,
      ageClass: "Established",
      health: "Excellent",
      summary:
        "A vibrant deciduous woodland with dense summer shade and strong fall color displays.",
      management: "Maintain a mosaic of canopy openings for regeneration pockets.",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-72.7, 44.0],
          [-72.3, 44.0],
          [-72.3, 43.7],
          [-72.7, 43.7],
          [-72.7, 44.0],
        ],
      ],
    },
  },
];
