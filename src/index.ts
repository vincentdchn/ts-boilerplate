/**
 * Application entry point
 */

// Load configurations
import '@/bootstrap';
import { env } from '@/config/env';
import { Secret } from '@/helpers/secret';
import { sum } from '@/sum/sum';

const result = sum(1, 2);
console.log(`The result of sum(1, 2) is ${result}`);

const secret = new Secret(env.APP_KEY);
console.log(`The secret is ${secret}`);
