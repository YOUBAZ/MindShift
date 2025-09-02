import express from "express";
const router = express.Router();
import {
  createModule,
  deleteModule,
  updateModule,
  listModule,
  readModule,
} from "../controllers/module.controller.js";
import {
  authorizeAdmin,
  authorizeTrainer,
} from "../middlewares/auth.middleware.js";
router.route("/create").post(createModule);
router.route("/:id").put(updateModule).delete(deleteModule);
router.route("/all-modules").get(listModule);
router.route("/:id").get(readModule);
export default router;
