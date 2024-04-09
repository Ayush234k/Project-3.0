import Meal from "../models/mealModel.js";

const getMealById = (req, res, next, id) => {
  Meal.findById(id)
    .exec()
    .then((meal) => {
      req.meal = meal;
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Meal not found in the DB!",
      });
    });
};

const createMeal = (req, res) => {
  const meal = new Meal(req.body);
  meal
    .save()
    .then((newMeal) => {
      return res.json({ newMeal });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Not able to save meal in DB!",
      });
    });
};

const getMeal = (req, res) => {
  res.json(req.meal);
};

const getFullMeal = (req, res) => {
  Meal.find()
    .exec()
    .then((meals) => {
      return res.json(meals);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "No meals found in DB!",
      });
    });
};

const updateMeal = (req, res) => {
  const meal = req.meal;
  meal.name = req.body.name ? req.body.name : meal.name;
  meal
    .save()
    .then((updatedMeal) => {
      return res.json(updatedMeal);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Failed to update meal!",
      });
    });
};

const removeMeal = (req, res) => {
  const meal = req.meal;
  meal
    .deleteOne()
    .then(() => {
      return res.json({
        message: "Successfully deleted!",
      });
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this meal!",
        });
      }
    });
};

export {
  getMealById,
  createMeal,
  getMeal,
  getFullMeal,
  updateMeal,
  removeMeal,
};
