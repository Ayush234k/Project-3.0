import express from "express";
const router = express.Router();
import {
  getDishById,
  createDish,
  updateDish,
  removeDish,
  getDish,
  getFullDish,
} from "../controllers/dishController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { getUserById } from "../controllers/userController.js";

router.param("userId", getUserById);
router.param("dishId", getDishById);

router.post("/dish/create/:userId", authenticate, authorizeAdmin, createDish);

router.put("/dish/:dishId/:userId", authenticate, authorizeAdmin, updateDish);

router.delete(
  "/dish/:dishId/:userId",
  authenticate,
  authorizeAdmin,
  removeDish
);

router.get("/dish", getFullDish);
router.get("/dish/:dishId", getDish);

export default router;
