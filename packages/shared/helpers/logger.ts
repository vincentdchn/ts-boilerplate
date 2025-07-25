import { config } from "@ts-boilerplate/config/app";
import { ConsoleLogger, Log, Severity } from "jsr:@cross/log";

const consoleLogger = new ConsoleLogger({
  minimumSeverity: Severity.Debug,
  severities: !config.logger.enabled ? [] : undefined,
});

export const logger = new Log([consoleLogger]);
