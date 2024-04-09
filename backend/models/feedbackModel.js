import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const feedbackSchema = new mongoose.Schema(
  {
    meal: {
      type: ObjectId,
      ref: "Meal",
      required: true,
    },
    dish: {
      type: ObjectId,
      ref: "Dish",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;