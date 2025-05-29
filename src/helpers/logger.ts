import { pino } from "pino";

import { env } from "@/config/env";

export const logger = pino({
  level: env.NODE_ENV === "production" ? "info" : "trace",
  redact: [],
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: {
    options: { colorize: true },
    target: "pino-pretty",
  },
});
