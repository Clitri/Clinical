$(document).ready(function (event) {
  const data = {
    name: "Stanford Medicine’s COVID-19 Efforts",
    color: "#f4f4f4",
    children: [
      {
        name: "testing",
        color: "#c7d1c5",
        children: [
          {
            name: "active infection",
            color: "#dce5d9",
            children: [
              {
                name: "testing samples",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "sample collection",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "processing",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "logistics",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "tracking",
                color: "#f0f7ed",
                size: 1,
              },
            ],
          },

          {
            name: "antibody",
            color: "#dce5d9",
            children: [
              {
                name: "testing samples",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "sample collection",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "processing",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "logistics",
                color: "#f0f7ed",
                size: 1,
              },
              {
                name: "tracking",
                color: "#f0f7ed",
                size: 1,
              },
            ],
          },
        ],
      },

      {
        name: "epidemiology",
        color: "#dad7cb",
        children: [
          {
            name: "public health",
            color: "#e8e5dd",
            children: [
              {
                name: "disparities",
                color: "#f4f1ea",
                size: 1,
              },
              {
                name: "health policy",
                color: "#f4f1ea",
                size: 1,
              },
              {
                name: "outreach",
                color: "#f4f1ea",
                size: 1,
              },
            ],
          },
          {
            name: "spread",
            color: "#e8e5dd",
            children: [
              {
                name: "monitoring",
                color: "#f4f1ea",
                size: 1,
              },
              {
                name: "contact tracing",
                color: "#f4f1ea",
                size: 1,
              },
              {
                name: "modeling",
                color: "#f4f1ea",
                size: 1,
              },
            ],
          },
          {
            name: "transmission",
            color: "#e8e5dd",
            children: [
              {
                name: "interventions",
                color: "#f4f1ea",
                size: 1,
              },
              {
                name: "mechanics",
                color: "#f4f1ea",
                size: 1,
              },
            ],
          },
        ],
      },

      {
        name: "immunity",
        color: "#82a6a8",
        children: [
          {
            name: "immunology",
            color: "#b2cecd",
            children: [
              {
                name: "mechanics",
                color: "#d6e5e3",
                size: 1,
              },
              {
                name: "rseponse prediction",
                color: "#d6e5e3",
                size: 1,
              },
            ],
          },

          {
            name: "vaccine",
            color: "#b2cecd",
            children: [
              {
                name: "protoyping",
                color: "#d6e5e3",
                size: 1,
              },
              {
                name: "trials",
                color: "#d6e5e3",
                size: 1,
              },
            ],
          },
        ],
      },

      {
        name: "therapeutics",
        color: "#ddd0b1",
        children: [
          {
            name: "repurposed",
            color: "#e8e0cf",
            children: [
              {
                name: "inpatient trials",
                color: "#f2ece2",
                size: 1,
              },
              {
                name: "outpatient trials",
                color: "#f2ece2",
                size: 1,
              },
            ],
          },

          {
            name: "new",
            color: "#e8e0cf",
            children: [
              {
                name: "discovery",
                color: "#f2ece2",
                size: 1,
              },
              {
                name: "prototyping",
                color: "#f2ece2",
                size: 1,
              },
              {
                name: "inpatient trials",
                color: "#f2ece2",
                size: 1,
              },
              {
                name: "outpatient trials",
                color: "#f2ece2",
                size: 1,
              },
            ],
          },
        ],
      },

      {
        name: "care",
        color: "#b6b1a9",
        children: [
          {
            name: "inpatients",
            color: "#d3d2cf",
            children: [
              {
                name: "triage",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "testing",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "therapeutics",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "ICU beds",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "ventilators",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "resource allocation",
                color: "#e5e4e3",
                size: 1,
              },
            ],
          },
          {
            name: "outpatients",
            color: "#d3d2cf",
            children: [
              {
                name: "triage",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "testing",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "therapeutics",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "clinical trials",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "telehealth",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "monitoring",
                color: "#e5e4e3",
                size: 1,
              },
            ],
          },

          {
            name: "providers",
            color: "#d3d2cf",
            children: [
              {
                name: "PPE",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "testing",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "dependent care",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "food + lodging",
                color: "#e5e4e3",
                size: 1,
              },
              {
                name: "psychosocial",
                color: "#e5e4e3",
                size: 1,
              },
            ],
          },
        ],
      },
    ],
  };

  Sunburst()
    .data(data)
    .size("size")
    .color("color")
    /*.excludeRoot(true)*/
    /*.sort((a, b) => b.value - a.value)*/
    .showLabels(true)(document.getElementById("chart"));
});
