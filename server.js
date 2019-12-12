const express = require("express");
const bodyParser = require('body-parser')
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const multer = require("multer");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan('dev'))
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use(express.static("./public/index.html"));

}
// Multer this will store the image in memory and upload the image into the uplaod folder 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./client/uploads");
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
      }
});


// this function will reject any file that is not either a jpeg or png
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
      cb(null, true);
  } else {
      cb(null, false)
  }
};

var upload = multer({ storage: storage, fileFilter:fileFilter })


app.use(cors());

//app.use(routes);
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
// Connect to the Mongo DB
//mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/macklist",
{
  useCreateIndex: true,
  useNewUrlParser: true
}
);

app.post('/user-post', upload.single('productImage'), (req, res) => {
  res.send( req.file);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

