import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const menuSchema = mongoose.Schema(
  {
    meal: {
      type: ObjectId,
      ref: "Meal",
      required: true,
    },
    dishes: {
      type: [ObjectId],
      ref: "Dish",
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
