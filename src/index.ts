export interface Person {
  name: string;
}

/**
 * Just a test method.
 *
 * @param person The person whos name should be displayed.
 * @returns some greeting.
 */
const test = (person: Person) => `Hello ${person.name}!`;

export { test };
