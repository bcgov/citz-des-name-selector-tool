const POLYNYM_PREFIXES = new Set<string>([
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
const LEGAL_WHOLE__LABEL = 'Legal (whole) full name';

/**
 * `pn_full_name_legal_first_name` from Person Name Components table
 */
const LEGAL_WHOLE_FIRST_NAME__LABEL = 'Legal (whole) first name';

/**
 * `pn_full_name_legal_middle_names` from Person Name Components table
 */
const LEGAL_WHOLE_MIDDLE_NAMES__LABEL = 'Legal (whole) middle name(s)';

/**
 * `pn_full_name_legal_last_name` from Person Name Components table
 */
const LEGAL_WHOLE_LAST_NAME__LABEL = 'Legal (whole) last name';

/**
 * `pn_full_name_legal_limited` from Person Name Components table
 */
const LEGAL_LIMITED__LABEL = 'Legal (limited) full name';

/**
 * `pn_full_name_legal_first_name` from Person Name Components table
 */
const LEGAL_LIMITED_FIRST_NAME__LABEL = 'Legal (limited) first name';

/**
 * `pn_full_name_legal_middle_names` from Person Name Components table
 */
const LEGAL_LIMITED_MIDDLE_NAMES__LABEL =
    'Legal (limited) middle name(s)';

/**
 * `pn_full_name_legal_last_name` from Person Name Components table
 */
const LEGAL_LIMITED_LAST_NAME__LABEL = 'Legal (limited) last name';

export {
    POLYNYM_PREFIXES,
    LEGAL_WHOLE__LABEL,
    LEGAL_WHOLE_FIRST_NAME__LABEL,
    LEGAL_WHOLE_MIDDLE_NAMES__LABEL,
    LEGAL_WHOLE_LAST_NAME__LABEL,
    LEGAL_LIMITED__LABEL,
    LEGAL_LIMITED_FIRST_NAME__LABEL,
    LEGAL_LIMITED_MIDDLE_NAMES__LABEL,
    LEGAL_LIMITED_LAST_NAME__LABEL
}
