/**
 * Backend application entry point
 */

// Load shared configurations and utilities
import { env } from "@config";
import { logger, Secret } from "@shared";

logger.info("Backend application started");
logger.info(`Environment: ${env.NODE_ENV}`);

// Example usage of the Secret class
const secret = new Secret(env.APP_KEY);
logger.info(`App secret is configured: ${secret}`);

logger.info("Backend application completed successfully");
