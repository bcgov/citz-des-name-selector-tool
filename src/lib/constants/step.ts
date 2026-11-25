const STEP_MAX = 5;

// Individual steps
const STEP = {
    WELCOME: 0,
    BACKGROUND: 1,
    CONSIDERATIONS: 2,
    LEGAL_WHOLE_NAME: 3,
    LEGAL_LIMITED_NAME: 4,
    VIEW_NAMES: 5,
    VIEW_IDENTIFICATIONS: 6,
} as const;

export { STEP, STEP_MAX };
