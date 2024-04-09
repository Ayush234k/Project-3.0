import Dish from "../models/dishModel.js";

const getDishById = (req, res, next, id) => {
  Dish.findById(id)
    .exec()
    .then((dish) => {
      req.dish = dish;
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Dish not found in the DB!",
      });
    });
};

const createDish = (req, res) => {
  const dish = new Dish(req.body);
  dish.totalRated = [0, 0, 0, 0, 0];
  dish
    .save()
    .then((newDish) => {
      return res.json({ newDish });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Not able to save dish in DB!",
      });
    });
};

const getDish = (req, res) => {
  res.json(req.dish);
};

const getFullDish = (req, res) => {
  Dish.find()
    .exec()
    .then((dishes) => {
      return res.json(dishes);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "No dishes found in DB!",
      });
    });
};

const updateDish = (req, res) => {
  const dish = req.dish;
  dish.name = req.body.name ? req.body.name : dish.name;
  dish.meal = req.body.meal ? req.body.meal : dish.meal;

  dish
    .save()
    .then((updatedDish) => {
      return res.json(updatedDish);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Failed to update dish!",
      });
    });
};

const removeDish = (req, res) => {
  const dish = req.dish;

  dish
    .deleteOne()
    .then(() => {
      return res.json({
        message: "Successfully deleted!",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Failed to delete this dish!",
      });
    });
};

export {
  getDishById,
  createDish,
  getDish,
  getFullDish,
  updateDish,
  removeDish,
};
