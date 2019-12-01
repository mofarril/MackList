const router = require("express").Router();
const adRoutes = require("./ads");
const userRoutes = require("./users")
const path = require("path");

// Ad routes
router.use("/ads", adRoutes);

//User Routes
router.use("/users", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
