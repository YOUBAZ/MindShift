import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { JWT } from "../config/constants.conf.js";
import { HTTP_STATUS } from "../config/constants.conf.js";
const prisma = new PrismaClient();
const authenticate = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, JWT.SECRET);
      req.user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nickname: true,
          email: true,
          role: true,
        },
      });
      next();
    } catch (error) {
      res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Not Authorized, token failed" });
    }
  } else {
    res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ message: "Not Authorized, no token" });
  }
};
export { authenticate };
