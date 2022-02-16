module.exports = {
  docs: [
    "index",
    "introduction",
    {
      type: "category",
      label: "Quantum Mechanics",
      collapsed: true,
      items: [
        "quantum-mechanics/quantum-mechanics",
        "quantum-mechanics/molecular-orbital",
      ],
    },
    {
      type: "category",
      label: "Crystal Structure",
      collapsed: true,
      items: [
        "crystal-structure/single-crystal",
        "crystal-structure/lattice",
        "crystal-structure/reciprocal-lattice",
        "crystal-structure/bragg-diffraction",
      ],
    },
    {
      type: "category",
      label: "Crystal Growth",
      collapsed: true,
      items: [
        "crystal-growth/crystal-growth",
        "crystal-growth/why-single-crystal",
        "crystal-growth/flux-method",
        "crystal-growth/bridgman-method",
        "crystal-growth/czochralski-method",
      ],
    },
    {
      type: "category",
      label: "Characterization",
      collapsed: true,
      items: [
        "characterization/characterization",
        "characterization/edax",
        "characterization/powder-xrd",
        "characterization/laue",
      ],
    },
    {
      type: "category",
      label: "Electronic Structure",
      collapsed: true,
      items: [
        "electronic-structure/bloch-theorem",
        "electronic-structure/tight-binding",
      ],
    },
    {
      type: "category",
      label: "ARPES",
      collapsed: true,
      items: [
        "arpes/arpes-intro",
        "arpes/three-step-model",
        "arpes/arpes-setup",
        "arpes/spin-arpes",
        "arpes/s-p-pol",
      ],
    },
    "mit",
    "license",
  ],
};
