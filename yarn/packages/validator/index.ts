/**
 * Counts the number of special characters in a given string.
 * Special characters considered are: !, @, #, $, %, ^, &, and *.
 *
 * @param str - The string to be evaluated.
 * @returns The number of special characters in the string.
 */
export const countSpecialChars = (str: string) => str.replace(/[^!@#$%^&*]/g, '').length

/**
 * Counts the number of numeric digits in a given string.
 *
 * @param str - The string to be evaluated.
 * @returns The count of numeric digits in the string.
 */
export const countNumbers = (str: string) => str.replace(/[^0-9]/g, '').length
