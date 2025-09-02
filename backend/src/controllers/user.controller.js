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
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid user ID" });
    }
    const { firstName, lastName, nickname, email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "All fields are required" });
    }
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });
    if (!existingUser) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "User not found" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        nickname,
        email,
        password: hashedPassword,
        role,
      },
    });
    res.status(HTTP_STATUS.OK).json(updatedUser);
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid user ID" });
    }
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });
    if (!existingUser) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "User not found" });
    }
    await prisma.user.delete({ where: { id } });
    res.status(HTTP_STATUS.OK).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};
export const listUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(HTTP_STATUS.OK).json(users);
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const readUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid user ID" });
    }
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "User not found" });
    }
    res.status(HTTP_STATUS.OK).json(user);
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};
