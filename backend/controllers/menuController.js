import Menu from "../models/menuModel.js";

const getMenuById = (req, res, next, id) => {
  Menu.findById(id)
    .exec()
    .then((menu) => {
      req.menu = menu;
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Menu not found in the DB!",
      });
    });
};

const createMenu = (req, res) => {
  const menu = new Menu(req.body);
  menu
    .save()
    .then((newMenu) => {
      return res.json({ newMenu });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Not able to save menu in DB!",
      });
    });
};

const getMenu = (req, res) => {
  res.json(req.menu);
};

const getFullMenu = (req, res) => {
  Menu.find()
    .exec()
    .then((menus) => {
      return res.json(menus);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "No menus found in DB!",
      });
    });
};

const updateMenu = (req, res) => {
  const menu = req.menu;
  if (!req.body.meal || !req.body.dishes || !req.body.day) {
    return res.status(400).json({
      error: "Failed to update menu due to missing information!",
    });
  }
  menu.meal = req.body.meal;
  menu.dishes = req.body.dishes;
  menu.day = req.body.day;

  menu
    .save()
    .then((updatedMenu) => {
      return res.json(updatedMenu);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "Failed to update menu!",
      });
    });
};

const removeMenu = (req, res) => {
  const menu = req.menu;
  menu
    .deleteOne()
    .then(() => {
      return res.json({
        message: "Successfully deleted!",
      });
    })
    .catch((err) => {
        console.log(err);
        return res.status(400).json({
          error: "Failed to delete this menu!",
        });
    });
};

export { 
  getMenuById, 
  createMenu,
  getMenu,
  getFullMenu,
  updateMenu,
  removeMenu,
};
