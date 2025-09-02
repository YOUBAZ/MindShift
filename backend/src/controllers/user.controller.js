import { PrismaClient } from "@prisma/client";
import { HTTP_STATUS } from "../config/constants.conf.js";
import bcrypt from "bcryptjs";
import createToken from "../config/createToken.js";
const prisma = new PrismaClient();
export const loginUser = async (req, res) => {
  try {
    if (!req.body || typeof req.body !== "object") {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid request body" });
    }
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "All fields are required" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }
    createToken(res, user.id);
    res.status(HTTP_STATUS.OK).json({ message: "Login successful", user });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};
export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    res.status(HTTP_STATUS.OK).json({ message: "Logout successful" });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};
export const createUser = async (req, res) => {
  try {
    if (!req.body || typeof req.body !== "object") {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid request body" });
    }
    const { firstName, lastName, nickname, email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "All fields are required" });
    } else if (role !== "USER" && role !== "ADMIN" && role !== "TRAINER") {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Role must be either USER, ADMIN, or TRAINER" });
    } else if (password.length < 6) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Password must be at least 6 characters long" });
    } else if (!email.includes("@")) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid email" });
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
export const updateUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "User not found" });
    }
    if (!req.body || typeof req.body !== "object") {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "Invalid request body" });
    }
    const { firstName, lastName, nickname, email, password } = req.body;
    if (!email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ error: "All fields are required" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        firstName,
        lastName,
        nickname,
        email,
        password: hashedPassword,
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
    const id = req.params.id;
    if (!id) {
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
export const readUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
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
