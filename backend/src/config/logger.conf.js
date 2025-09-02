import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";
import { SERVER } from "./constants.conf.js";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const fileFormat = format.combine(format.timestamp(), format.json());

const consoleFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? JSON.stringify(meta) : "";
    return `${timestamp} [${level}]: ${message} ${metaString}`;
  })
);

const dailyRotateError = new transports.DailyRotateFile({
  level: "error",
  filename: path.join(logDir, "error-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d",
  zippedArchive: true,
  format: fileFormat,
});

const dailyRotateCombined = new transports.DailyRotateFile({
  filename: path.join(logDir, "combined-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d",
  zippedArchive: true,
  format: fileFormat,
});

const logger = createLogger({
  level: SERVER.isDev ? "debug" : "info",
  transports: [
    !SERVER.isDev && dailyRotateError,
    !SERVER.isDev && dailyRotateCombined,
    new transports.Console({
      format: consoleFormat,
    }),
  ].filter(Boolean),
  exceptionHandlers: [
    new transports.File({
      filename: path.join(logDir, "exceptions.log"),
      format: fileFormat,
    }),
  ],
  rejectionHandlers: [
    new transports.File({
      filename: path.join(logDir, "rejections.log"),
      format: fileFormat,
    }),
  ],
  exitOnError: false,
});

export default logger;
