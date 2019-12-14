const db = require("../../models")
const router = require("express").Router();
const adController = require("../../controllers/adController");


// Matches with "/api/ads"
router.route("/")
  .post(adController.create)
  .get(adController.findAll);

// Matches with "/api/ads/:id"
router
  .route("/:id")
  .get(adController.findById)
  .delete(adController.remove);

// Matches with "/api/ads/lowTohigh"
router
.route("/lowTohigh")
.get(adController.findLowPrice)

// Matches with "/api/ads/highTolow"
router
.route("/highTolow")
.get(adController.findHighPrice)



module.exports = router;
