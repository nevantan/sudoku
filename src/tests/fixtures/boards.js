const emptyBoard = [
    [
        // Row 1
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 2
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 3
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 4
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 5
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 6
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 7
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 8
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 9
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ]
];

const partialValidBoard = [
    [
        // Row 1
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 3, valid: true, fixed: true }
    ],
    [
        // Row 2
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true }
    ],
    [
        // Row 3
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 4
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true }
    ],
    [
        // Row 5
        { value: 1, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 3, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 8, valid: true, fixed: true }
    ],
    [
        // Row 6
        { value: 6, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 7
        { value: 0, valid: true, fixed: false },
        { value: 3, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 2, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 9, valid: true, fixed: true }
    ],
    [
        // Row 8
        { value: 9, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 9
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 4, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ]
];

const partialInvalidBoard = [
    [
        // Row 1
        { value: 0, valid: false, fixed: false },
        { value: 5, valid: false, fixed: true },
        { value: 0, valid: false, fixed: false },
        { value: 1, valid: false, fixed: true },
        { value: 0, valid: false, fixed: false },
        { value: 8, valid: false, fixed: true },
        { value: 1, valid: false, fixed: true },
        { value: 0, valid: false, fixed: false },
        { value: 3, valid: false, fixed: true }
    ],
    [
        // Row 2
        { value: 0, valid: false, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true }
    ],
    [
        // Row 3
        { value: 8, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 4
        { value: 8, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true }
    ],
    [
        // Row 5
        { value: 1, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 3, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 8, valid: true, fixed: true }
    ],
    [
        // Row 6
        { value: 6, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 7, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 7
        { value: 0, valid: false, fixed: false },
        { value: 3, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 2, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 9, valid: true, fixed: true }
    ],
    [
        // Row 8
        { value: 9, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 6, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 5, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ],
    [
        // Row 9
        { value: 5, valid: false, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 4, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 1, valid: true, fixed: true },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false },
        { value: 0, valid: true, fixed: false }
    ]
];

const fullValidBoard = [
    [
        // Row 1
        { value: 2, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true }
    ],
    [
        // Row 2
        { value: 5, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true }
    ],
    [
        // Row 3
        { value: 7, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true }
    ],
    [
        // Row 4
        { value: 4, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true }
    ],
    [
        // Row 5
        { value: 8, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true }
    ],
    [
        // Row 6
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true }
    ],
    [
        // Row 7
        { value: 6, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true }
    ],
    [
        // Row 8
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true }
    ],
    [
        // Row 9
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true }
    ]
];

// Contains 2 column errors, 2 row errors, and 2 cage errors
const fullInvalidBoard = [
    [
        // Row 1
        { value: 8, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true }
    ],
    [
        // Row 2
        { value: 5, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true }
    ],
    [
        // Row 3
        { value: 7, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true }
    ],
    [
        // Row 4
        { value: 4, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true }
    ],
    [
        // Row 5
        { value: 8, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true }
    ],
    [
        // Row 6
        { value: 1, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true }
    ],
    [
        // Row 7
        { value: 6, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true }
    ],
    [
        // Row 8
        { value: 3, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true }
    ],
    [
        // Row 9
        { value: 9, valid: true, fixed: true },
        { value: 5, valid: true, fixed: true },
        { value: 8, valid: true, fixed: true },
        { value: 7, valid: true, fixed: true },
        { value: 1, valid: true, fixed: true },
        { value: 2, valid: true, fixed: true },
        { value: 3, valid: true, fixed: true },
        { value: 4, valid: true, fixed: true },
        { value: 6, valid: true, fixed: true }
    ]
];

export {
    emptyBoard,
    partialValidBoard,
    partialInvalidBoard,
    fullValidBoard,
    fullInvalidBoard
};
