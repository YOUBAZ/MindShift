import express from "express";
const router = express.Router();
import {
  loginUser,
  logoutUser,
  createUser,
  deleteUser,
  updateUser,
  listUser,
  readUserProfile,
} from "../controllers/user.controller.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/auth.middleware.js";
router.route("/login").post(loginUser);
router.route("/logout").post(authenticate, logoutUser);
router.route("/create").post(authenticate, authorizeAdmin, createUser);
router.route("/:id").delete(authenticate, authorizeAdmin, deleteUser);
router.route("/all-users").get(authenticate, authorizeAdmin, listUser);
router
  .route("/profile")
  .get(authenticate, readUserProfile)
  .put(authenticate, updateUser);
export default router;
