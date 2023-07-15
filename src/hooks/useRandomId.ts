import { useMemo } from 'react';

/**
 * Returns a random id.
 * It uses useMemo under the hood to avoid generating a new id on every render.
 * So the id will be the same until the prefix changes.
 * example: useRandomId('prefix') => 'prefix-abcd123'
 *
 * @param prefix optional {string}
 * @returns {string}
 */
export const useRandomId = (prefix?: string): string => {
  return useMemo(() => {
    // Generate random id by converting a random number to base 36
    // and then it extracts a substring of the base-36 string,
    // which starting at index 2 and ending at index 9 (exclusive).
    // This results in a string of length 7
    const randomId = Math.random().toString(36).substring(2, 9);

    if (!prefix) {
      return randomId;
    }

    return `${prefix}-${randomId}`;
  }, [prefix]);
};
