import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Breakfast", "Lunch", "Snacks", "Dinner"],
    },
  },
  { timestamps: true }
);

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;