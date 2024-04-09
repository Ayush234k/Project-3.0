import express from "express";
const router = express.Router();
import {
  getFeedbackById,
  createFeedback,
//   updateFeedback,
//   deleteFeedback,
  getFeedback,
  getAllFeedback,
} from "../controllers/feedbackController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { getUserById } from "../controllers/userController.js";

router.param("userId", getUserById);
router.param("feedbackId", getFeedbackById);

router.post(
    "/feedback/create/:userId",
    authenticate,  
    createFeedback
);

// router.put(
//     "/feedback/:feedbackId/:userId", 
//     authenticate,
//     updateFeedback
// );

// router.delete(
//   "/feedback/:feedbackId/:userId",
//   authenticate,
//   authorizeAdmin,
//   deleteFeedback
// );

router.get("/feedback", getAllFeedback);
router.get("/feedback/:feedbackId", getFeedback);

export default router;
