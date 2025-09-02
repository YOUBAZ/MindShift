import dotenv from "dotenv";
dotenv.config();
export const SERVER = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  isDev: process.env.NODE_ENV === "development",
  CORS_ORIGINS:
    process.env.SERVER_CORS_ORIGINS || process.env.CLIENT_SERVER || "",
};
export const JWT = {
  SECRET: process.env.JWT_SECRET,
  EXPIRES_IN: process.env.JWT_EXPIRES_IN || "30d",
};
export const DB_SERVER = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PORT: process.env.DB_PORT,
  URL: process.env.DATABASE_URL,
};
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    LIMIT_REQUESTS: 429,


    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};