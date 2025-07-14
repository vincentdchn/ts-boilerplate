/**
 * Application entry point
 */

// Load configurations
import "@/bootstrap.ts";
import { env } from "@/config/env.ts";
import { logger } from "@/helpers/logger.ts";
import { Secret } from "@/helpers/secret.ts";
import { sum } from "@/sum/sum.ts";

const result = sum(1, 2);
logger.info(`The result of sum(1, 2) is ${result}`);

const secret = new Secret(env.APP_KEY);
logger.info(`The secret is ${secret}`);
