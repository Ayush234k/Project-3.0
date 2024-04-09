import express from "express";
const router = express.Router();
import {
  getMenuById,
  createMenu,
  updateMenu,
  removeMenu,
  getMenu,
  getFullMenu,
} from "../controllers/menuController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { getUserById } from "../controllers/userController.js";

router.param("userId", getUserById);
router.param("menuId", getMenuById);

router.post("/menu/create/:userId", authenticate, authorizeAdmin, createMenu);

router.put("/menu/:menuId/:userId", authenticate, authorizeAdmin, updateMenu);

router.delete(
  "/menu/:menuId/:userId",
  authenticate,
  authorizeAdmin,
  removeMenu
);

router.get("/menu", getFullMenu);
router.get("/menu/:menuId", getMenu);

export default router;
