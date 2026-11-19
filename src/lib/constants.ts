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

/**
 * `pn_full_name_legal_whole` from Person Name Components table
 */
export const LEGAL_WHOLE__LABEL = 'Legal (whole) full name';

/**
 * `pn_full_name_legal_first_name` from Person Name Components table
 */
export const LEGAL_WHOLE_FIRST_NAME__LABEL = 'Legal (whole) first name';

/**
 * `pn_full_name_legal_middle_names` from Person Name Components table
 */
export const LEGAL_WHOLE_MIDDLE_NAMES__LABEL = 'Legal (whole) middle name(s)';

/**
 * `pn_full_name_legal_last_name` from Person Name Components table
 */
export const LEGAL_WHOLE_LAST_NAME__LABEL = 'Legal (whole) last name';

/**
 * `pn_full_name_legal_limited` from Person Name Components table
 */
export const LEGAL_LIMITED__LABEL = 'Legal (limited) full name';

/**
 * `pn_full_name_legal_first_name` from Person Name Components table
 */
export const LEGAL_LIMITED_FIRST_NAME__LABEL = 'Legal (limited) first name';

/**
 * `pn_full_name_legal_middle_names` from Person Name Components table
 */
export const LEGAL_LIMITED_MIDDLE_NAMES__LABEL =
    'Legal (limited) middle name(s)';

/**
 * `pn_full_name_legal_last_name` from Person Name Components table
 */
export const LEGAL_LIMITED_LAST_NAME__LABEL = 'Legal (limited) last name';
