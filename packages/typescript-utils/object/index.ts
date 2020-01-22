export const pick = <T, K extends keyof T>(object: T, ...keys: Array<K>): Pick<T, K> =>
  keys.reduce((result, key) => ({ ...result, [key]: object[key] }), {}) as Pick<T, K>;

export const omit = <T, K extends keyof T>(object: T, ...keys: Array<K>): Omit<T, K> =>
  keys.reduce((result, key) => (delete result[key], result), { ...object });
