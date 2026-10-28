export const STEP_MAX = 5;

// Individual steps
export const STEP = {
    WELCOME: 0,
    BACKGROUND: 1,
    CONSIDERATIONS: 2,
    LEGAL_NAME: 3,
    ALTERNATIVE_NAME: 4,
    VIEW_NAMES: 5,
    VIEW_IDENTIFICATIONS: 6,
} as const;

export const POLYNYM_PREFIXES = new Set<string>([
    'van',
    'von',
    'der',
    'de',
    'da',
    'di',
    'la',
    'le',
    'bin',
    'ibn',
    'al',
    'el',
]);
