import jwt from "jsonwebtoken";
import { JWT } from "./constants.conf.js";
import { SERVER } from "./constants.conf.js";
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, JWT.SECRET, {
    expiresIn: JWT.EXPIRES_IN,
  });
  // Set JWT as an Http only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: SERVER.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return token;
};
export default generateToken;
