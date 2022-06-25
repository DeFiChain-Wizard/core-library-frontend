/**
 * Checks if a certain String is null or empty
 *
 * @param value the text to be checked
 * @returns true or false
 */
const isStringNullOrEmpty = (value: string | string[]): boolean => {
  return value === undefined || value.length === 0;
};

/**
 * This is just a simple check to see if a seed might be valid.
 *
 * The real check will happen when the seed is encrypted.
 *
 * @param seed The seed to check.
 * @returns true if the seed seems to be valid.
 */
const isSeedValid = (seed: string[]): boolean =>
  !isStringNullOrEmpty(seed) && seed.length === 24;

export { isStringNullOrEmpty, isSeedValid };
