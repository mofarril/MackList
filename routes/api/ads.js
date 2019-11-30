const router = require("express").Router();
const adController = require("../../controllers/adController");
const userController = require("../../controllers/userController");

// Matches with "/api/ads"
router.route("/")
  .post(adController.create)
  .post(userController.create)
  .get(adController.findAll);

// Matches with "/api/ads/:id"
router
  .route("/:id")
  .get(adController.findById)
  .delete(adController.remove);

module.exports = router;
