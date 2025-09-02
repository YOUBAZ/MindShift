import { PrismaClient } from "@prisma/client";
import { HTTP_STATUS } from "../config/constants.conf.js";
import bcrypt from "bcryptjs";
import createToken from "../config/createToken.js";
const prisma = new PrismaClient();
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, nickname, email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "All fields are required" });
    }
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res
        .status(HTTP_STATUS.CONFLICT)
        .json({ error: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        nickname,
        email,
        password: hashedPassword,
        role,
      },
    });
    createToken(res, newUser.id);
    res.status(HTTP_STATUS.CREATED).json(newUser);
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
      console.log(error);
  }
};
export const updateUser = (req, res) => {
  res.send("Update User");
};
export const deleteUser = (req, res) => {
  res.send("Delete User");
};
export const listUser = (req, res) => {
  res.send("List Users");
};
export const readUser = (req, res) => {
  res.send("Read User");
};
