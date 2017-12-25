const emptyBoard = [
  [
    // Row 1
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 2
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 3
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 4
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 5
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 6
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 7
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 8
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ],
  [
    // Row 9
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true },
    { value: 0, valid: true }
  ]
];

const fullValidBoard = [
  [
    // Row 1
    { value: 2, valid: true },
    { value: 8, valid: true },
    { value: 1, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true },
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 3, valid: true },
    { value: 7, valid: true }
  ],
  [
    // Row 2
    { value: 5, valid: true },
    { value: 4, valid: true },
    { value: 3, valid: true },
    { value: 8, valid: true },
    { value: 2, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 9, valid: true }
  ],
  [
    // Row 3
    { value: 7, valid: true },
    { value: 9, valid: true },
    { value: 6, valid: true },
    { value: 1, valid: true },
    { value: 3, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 2, valid: true },
    { value: 4, valid: true }
  ],
  [
    // Row 4
    { value: 4, valid: true },
    { value: 2, valid: true },
    { value: 9, valid: true },
    { value: 3, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 8, valid: true },
    { value: 5, valid: true }
  ],
  [
    // Row 5
    { value: 8, valid: true },
    { value: 3, valid: true },
    { value: 5, valid: true },
    { value: 9, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 2, valid: true }
  ],
  [
    // Row 6
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 7, valid: true },
    { value: 2, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 4, valid: true },
    { value: 9, valid: true },
    { value: 3, valid: true }
  ],
  [
    // Row 7
    { value: 6, valid: true },
    { value: 1, valid: true },
    { value: 4, valid: true },
    { value: 5, valid: true },
    { value: 9, valid: true },
    { value: 3, valid: true },
    { value: 2, valid: true },
    { value: 7, valid: true },
    { value: 8, valid: true }
  ],
  [
    // Row 8
    { value: 3, valid: true },
    { value: 7, valid: true },
    { value: 2, valid: true },
    { value: 6, valid: true },
    { value: 8, valid: true },
    { value: 4, valid: true },
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 1, valid: true }
  ],
  [
    // Row 9
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 2, valid: true },
    { value: 3, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true }
  ]
];

// Contains 2 column errors, 2 row errors, and 2 cage errors
const fullInvalidBoard = [
  [
    // Row 1
    { value: 8, valid: true },
    { value: 2, valid: true },
    { value: 1, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true },
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 3, valid: true },
    { value: 7, valid: true }
  ],
  [
    // Row 2
    { value: 5, valid: true },
    { value: 4, valid: true },
    { value: 3, valid: true },
    { value: 8, valid: true },
    { value: 2, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 9, valid: true }
  ],
  [
    // Row 3
    { value: 7, valid: true },
    { value: 9, valid: true },
    { value: 9, valid: true },
    { value: 1, valid: true },
    { value: 3, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 2, valid: true },
    { value: 4, valid: true }
  ],
  [
    // Row 4
    { value: 4, valid: true },
    { value: 2, valid: true },
    { value: 6, valid: true },
    { value: 3, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 8, valid: true },
    { value: 5, valid: true }
  ],
  [
    // Row 5
    { value: 8, valid: true },
    { value: 3, valid: true },
    { value: 5, valid: true },
    { value: 9, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 2, valid: true }
  ],
  [
    // Row 6
    { value: 1, valid: true },
    { value: 6, valid: true },
    { value: 7, valid: true },
    { value: 2, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 4, valid: true },
    { value: 9, valid: true },
    { value: 3, valid: true }
  ],
  [
    // Row 7
    { value: 6, valid: true },
    { value: 1, valid: true },
    { value: 4, valid: true },
    { value: 5, valid: true },
    { value: 9, valid: true },
    { value: 3, valid: true },
    { value: 2, valid: true },
    { value: 7, valid: true },
    { value: 8, valid: true }
  ],
  [
    // Row 8
    { value: 3, valid: true },
    { value: 7, valid: true },
    { value: 2, valid: true },
    { value: 6, valid: true },
    { value: 8, valid: true },
    { value: 4, valid: true },
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 1, valid: true }
  ],
  [
    // Row 9
    { value: 9, valid: true },
    { value: 5, valid: true },
    { value: 8, valid: true },
    { value: 7, valid: true },
    { value: 1, valid: true },
    { value: 2, valid: true },
    { value: 3, valid: true },
    { value: 4, valid: true },
    { value: 6, valid: true }
  ]
];

export { emptyBoard, fullValidBoard, fullInvalidBoard };
