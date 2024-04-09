import express from "express";
const router = express.Router();
import {
  getMealById,
  createMeal,
  updateMeal,
  removeMeal,
  getMeal,
  getFullMeal,
} from "../controllers/mealController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { getUserById } from "../controllers/userController.js";

router.param("userId", getUserById);
router.param("mealId", getMealById);

router.post(
    "/meal/create/:userId",
    authenticate, 
    authorizeAdmin, 
    createMeal
);

router.put(
    "/meal/:mealId/:userId", 
    authenticate, 
    authorizeAdmin, 
    updateMeal
);

router.delete(
  "/meal/:mealId/:userId",
  authenticate,
  authorizeAdmin,
  removeMeal
);

router.get("/meal", getFullMeal);
router.get("/meal/:mealId", getMeal);

export default router;
