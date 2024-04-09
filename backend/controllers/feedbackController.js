import Dish from "../models/dishModel.js";
import Feedback from "../models/feedbackModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const getFeedbackById = (req, res, next, id) => {
  Feedback.findById(id)
    .exec()
    .then((feed) => {
      req.feedback = feed;
      next();
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          error: "Feedback not found in DB!",
        });
      }
    });
};

const createFeedback = asyncHandler(async (req, res) => {
  try {
    let dishId = req.body.dish;
    let dish = await Dish.findById(dishId);
    if (dish) {
      dish = await Dish.findByIdAndUpdate(dishId, {
        $inc: { [`totalRated.${req.body.rating - 1}`]: 1 }
      });
    } else {
      console.log("Dish not found!");
      return res.status(400).json({
        error: "Not able to save feedback in DB since no such dish was found!",
      });
    }

    const feedback = new Feedback(req.body);
    feedback.user = req.user._id;
    await feedback.save();
    return res.json({ newFeedback: feedback });
  } catch (err) {
    console.error("Error saving feedback:", err);
    return res.status(400).json({
      error: "Not able to save feedback in DB",
    });
  }
});

const getFeedback = (req, res) => {
  return res.json(req.feedback);
};

const getAllFeedback = (req, res) => {
  Feedback.find()
    .exec()
    .then((feedbacks) => {
      return res.json(feedbacks);
    })
    .catch((err) => {
      return res.status(400).json({
        error: "No feedbacks found in DB!",
      });
    });
};

const updateFeedback = (req, res) => {
  const feedback = req.feedback;
  feedback.meal = req.body.meal;
  feedback.dish = req.body.dish;
  feedback.rating = req.body.rating;
  feedback.review = req.body.review;

  feedback
    .save()
    .then((updatedFeedback) => {
      return res.json(updatedFeedback);
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Failed to update feedback!",
      });
    });
};

const removeFeedback = (req, res) => {
  const feedback = req.feedback;

  feedback
    .deleteOne()
    .then(() => {
      return res.json({
        message: "Successfully deleted!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Failed to delete this feedback!",
      });
    });
};

export {
  getFeedbackById,
  createFeedback,
  getFeedback,
  getAllFeedback,
  updateFeedback,
  removeFeedback,
};
