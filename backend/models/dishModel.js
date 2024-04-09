import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const dishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    meal: {
      type: ObjectId,
      ref: "Meal",
      required: true,
    },
    totalRated: [0, 0, 0, 0, 0],
  },
  { timestamps: true }
);

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;
