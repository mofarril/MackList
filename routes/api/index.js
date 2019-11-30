const router = require("express").Router();
const adRoutes = require("./ads");
const path = require("path");

// Book routes
router.use("/ads", adRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
