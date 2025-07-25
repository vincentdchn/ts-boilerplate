import { safeEnv, string } from "jsr:@safe-env/safe-env";

/**
 * Environment variables configuration
 *
 * Validate the environment variables using @safe-env/safe-env
 * It provides type safety and validation for the environment variables
 */
export const env = safeEnv({
  /**
   * ----------------------------------------------------------
   * Chore
   * ----------------------------------------------------------
   */
  APP_KEY: string(),
  NODE_ENV: string({ defaultValue: "development" }),
});

// Additional validation and defaults
if (env.APP_KEY.length < 32) {
  throw new Error("APP_KEY must be at least 32 characters long");
}

if (!/^[A-Za-z0-9+/=]+$/.test(env.APP_KEY)) {
  throw new Error("APP_KEY must be a valid base64 string");
}
