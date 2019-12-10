const db = require("../../models")
const router = require("express").Router();
const adController = require("../../controllers/adController");
const cheerio = require("cheerio")
const axios = require("axios")

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
  db.Ad.sort(function (a, b) { return a - b });
})

// Matches with "/api/ads/highTolow"
router.get("/highTolow", function (req, res) {
  db.Ad.sort(function (a, b) { return b - a });
})

router.get("/scrape", function (req, res) {
  axios.get("https://en.wikipedia.org/wiki/List_of_United_States_cities_by_area")
    .then(function (response) {
      var $ = cheerio.load(response.data);
      console.log(response.data)


      $("tbody tr td").each(function (i, element) {
        var result = {};
        console.log(element)
        result.city = $(this)
          .find("a")
          .attr("href")


        db.City.create(result)
          .then(function (dbCity) {
            console.log(dbCity)
          })
          .catch(function (err) {
            console.log(err)
          }); console.log(result)
      })
    })
})

module.exports = router;
