import express from "express";
const router = express.Router();
import {
  createUser,
  deleteUser,
  updateUser,
  listUser,
  readUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
router.route("/create").post(createUser);
router.route("/:id").put(authenticate, updateUser).delete(deleteUser);
router.route("/all-users").get(listUser);
router.route("/:id").get(readUser);
export default router;
