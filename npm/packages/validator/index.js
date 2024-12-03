/**
 * Counts the number of special characters in a given string.
 * Special characters considered are: !, @, #, $, %, ^, &, and *.
 *
 * @param {string} str - The string to be evaluated.
 * @returns {number} The number of special characters in the string.
 */
export const countSpecialChars = (str) =>
  str.replace(/[^!@#$%^&*]/g, "").length;

/**
 * Counts the number of numeric digits in a given string.
 *
 * @param {string} str - The string to be evaluated.
 * @returns {number} The count of numeric digits in the string.
 */
export const countNumbers = (str) => str.replace(/[^0-9]/g, "").length;
