import express from "express";
const router = express.Router();
// import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createUser,
  deleteUser,
  updateUser,
  listUser,
  readUser,
} from "../controllers/user.controller.js";
router.route("/").post(createUser);
router
  .route("/:userId")
  .put(updateUser)
  .delete(deleteUser);
router.route("/users").get(listUser);
router.route("/:id").get(readUser);
export default router;
