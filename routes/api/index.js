const router = require("express").Router();
const adRoutes = require("./ads");
const userRoutes = require("./users")
const imagesRoutes = require("./images")
const path = require("path");


// Ad routes
router.use("/ads", adRoutes);

//User Routes
router.use("/users", userRoutes);

// images route
router.use("/images", imagesRoutes)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
