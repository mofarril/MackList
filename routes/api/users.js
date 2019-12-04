const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
.post(userController.create)

router.route("/:id")
.get(userController.findUser)

router.route("/email/:id")
.get(userController.findEmail)

router.route("/login/:user/:pass")
.get(userController.loginUser)

module.exports = router;
