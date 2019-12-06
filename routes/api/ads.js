const db = require("../../models/ad") 
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
router.get("/lowTohigh", function (req, res) {
 db.Ad.sort(function(a, b){return a-b});
})

module.exports = router;
