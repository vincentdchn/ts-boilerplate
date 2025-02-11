/* eslint-disable no-unused-vars */
import { config } from 'dotenv';
import process from 'node:process';
import { z } from 'zod';

config();

/**
 * Environment variables schema
 *
 * Validate the environment variables
 * It is used to ensure that the environment variables are valid
 * and to provide type safety for the environment variables
 */
const environmentSchema = z.object({
    /**
     *----------------------------------------------------------
     * Chore
     *----------------------------------------------------------
     */
    APP_KEY: z
        .string()
        .min(32, { message: 'APP_KEY must be at least 32 characters long' })
        .regex(/^[A-Za-z0-9+/=]+$/, {
            message: 'APP_KEY must be a valid base64 string',
        }),
    NODE_ENV: z.enum(['development', 'production']).default('development'),
});

/**
 * Format error
 *
 * Formats the error message for the environment variables
 * It is used to provide a more readable error message when the environment variables are invalid
 */
function formatError(error: z.ZodError): string {
    const messages = ['\nInvalid environment variables:'];
    for (const error_ of error.errors) {
        messages.push(`\n${error_.path.join('.')}: ${error_.message}`);
    }
    return messages.join('');
}

/**
 * Parses the environment variables
 * Raises an error if the environment variables are invalid
 */
let env: z.infer<typeof environmentSchema>;
try {
    env = environmentSchema.parse(process.env);
} catch (error) {
    if (error instanceof z.ZodError) {
        throw new TypeError(formatError(error));
    }
    throw error;
}

export { env };

/**
 * Declare the environment variables for the application
 */
declare global {
    namespace NodeJS {
        interface ProcessEnvironment
            extends z.infer<typeof environmentSchema> {}
    }
}
