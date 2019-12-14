var express =require("express");
const  multer = require("multer");
const adRouter = express.Router();

// Multer this will store the image in memory and upload the image into the uplaod folder 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
        }
  });
  
  
  // this function will reject any file that is not either a jpeg or png
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false)
    }
  };
  
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024*1024*5
    },
    fileFilter:fileFilter
}); 

adRouter.route("/")
.post(upload.single("productImage"), (req, res, next)=>{
    console.log(req.body);
    const newAd = new Ad({
        owner: req.body.owner ,
        productTitle:req.body.productTitle,
        productImage:req.file.filename ,
        productDescription:req.body.productDescription ,
        productCost:req.body.productCost ,
        locationCity:req.body.locationCity ,
        locationState:req.body.locationState ,
        sellerContactName:req.body.sellerContactName ,
        sellerContactPhone: req.body.sellerContactPhone,
        sellerContactEmail: req.body.sellerContactEmail,
    })
    res.send()
    newAd.save()
    .then((res)=>{
        console.log(res);
        res.status(200).json({
            success: true,
            document: res
        });
    })
    .catch((err)=> next(err));
});
// Router.post('/user-post', upload.single('productImage'), (req, res) => {
//     res.send(req.file);
//   });
  