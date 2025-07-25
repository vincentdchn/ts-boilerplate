/**
 * Copy-pasted from https://github.com/poppinss/utils/blob/6.x/src/secret.ts
 * @credit - https://github.com/poppinss/utils
 */

import { config } from "@ts-boilerplate/config/app";

/**
 * Define a Secret value that hides itself from the logs or the console
 * statements.
 *
 * The idea is to prevent accidental leaking of sensitive information.
 * Idea borrowed from.
 * https://transcend.io/blog/keep-sensitive-values-out-of-your-logs-with-types
 */
export class Secret<T> {
  #keyword: string;
  /** The secret value */
  #value: T;

  constructor(value: T, redactedKeyword?: string) {
    this.#value = value;
    this.#keyword = redactedKeyword || config.logger.redactedKeyword;
  }

  /**
   * Transform the original value and create a new
   * secret from it.
   */
  // eslint-disable-next-line no-unused-vars
  map<R>(transformFunction: (value: T) => R): Secret<R> {
    return new Secret(transformFunction(this.#value));
  }
  /**
   * Returns the original value
   */
  release(): T {
    return this.#value;
  }
  [Symbol.for("nodejs.util.inspect.custom")](): string {
    return this.#keyword;
  }
  toJSON(): string {
    return this.#keyword;
  }
  toLocaleString(): string {
    return this.#keyword;
  }

  toString(): string {
    return this.#keyword;
  }

  valueOf(): string {
    return this.#keyword;
  }
}
