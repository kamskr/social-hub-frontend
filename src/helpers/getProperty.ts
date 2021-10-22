/**
 * @param o: Object to extract property from
 * @param propertyName: string key of object
 * @returns Value from object selected by string
 */
export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}
