/**
 * Checks if a certain String is null or empty
 *
 * @param value the text to be checked
 * @returns true or false
 */
const isStringNullOrEmpty = (value: string | string[]): boolean => {
  return value === undefined || value.length === 0;
};

export { isStringNullOrEmpty };
