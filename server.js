const express = require("express");
const bodyParser = require('body-parser')
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//       }
// });
// const upload = multer({
//   storage: storage,
//   limits:{
//       fileSize: 1024*1024*5
//   },
//   fileFilter:fileFilter
// }); 

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
// app.use("uploads", express.static('../../client/uploads'))

// app.get("/", (req, res)=>{
//   res.sendFile(__dirname + "../../client/index.html")
// })
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


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

// app.post("/", upload.single('productImage'), (req, res) => {
//   res.send();
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

