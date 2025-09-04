import express from "express";
const router = express.Router();
import {
  createModule,
  deleteModule,
  updateModule,
  listModule,
  readModule,
  listModuleForTrainer,
  listModuleForUser,
} from "../controllers/module.controller.js";
import {
  authenticate,
  authorizeAdmin,
  authorizeTrainer,
} from "../middlewares/auth.middleware.js";
router.route("/create").post(authenticate, authorizeAdmin, createModule);
router.route("/:id").put(authenticate, authorizeAdmin, updateModule).delete(authenticate, authorizeAdmin, deleteModule);
router.route("/all-modules").get(authenticate, authorizeAdmin, listModule);
router.route("/all-modules-trainer").get(authenticate, authorizeTrainer, listModuleForTrainer);
router.route("/all-modules-user").get(authenticate, listModuleForUser);
router.route("/:id").get(authenticate, authorizeAdmin, readModule); // we will get here later

export default router;
