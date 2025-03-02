/**
 * Application entry point
 */

// Load configurations
import '@/bootstrap';
import { env } from '@/config/env';
import { logger } from '@/helpers/logger';
import { Secret } from '@/helpers/secret';
import { sum } from '@/sum/sum';

const result = sum(1, 2);
logger.info(`The result of sum(1, 2) is ${result}`);

const secret = new Secret(env.APP_KEY);
logger.info(`The secret is ${secret}`);
