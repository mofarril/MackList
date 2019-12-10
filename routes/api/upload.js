const db = require("../../models/ad");
const router = require("express").Router();
const multer = require("multer");

// this will store the image in memory and upload the image into the uplaod folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
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
    limits: {
        fileSize: maxSize
    },
    fileFilter: fileFilter
});

router.get("/", (req, res, next) => {
    db.find()
        .select("title cost _id image description phone email")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                ads: docs.map(doc => {
                    return {
                        title: doc.title,
                        owner: doc.owner,
                        description: doc.description,
                        image: doc.image,
                        city: doc.city,
                        state: doc.state,
                        cost: doc.cost,
                        phone: doc.phone,
                        email: doc.email,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/home" + doc._id
                        }
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post("/", upload.single('image'), (req, res, next) => {
    const ad = new Ad({
        _id: new mongoose.Schema.Types.ObjectId(),
        title: req.body.title,
        owner: req.body.owner,
        description: req.body.description,
        image: req.file.path,
        city: req.body.city,
        state: req.body.state,
        cost: req.body.cost,
        phone: req.body.phone,
        email: req.body.email
    });
    ad
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created Ad successfully",
                createdAd: {
                    title: result.title,
                    owner: result.owner,
                    description: result, description,
                    cost: result.cost,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/home" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get("/:adId", (req, res, next) => {
    const id = req.params.adId;
    db.findById(id)
        .select('title cost _id image')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    ad: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/home'
                    }
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.patch("/:adId", (req, res, next) => {
    const id = req.params.adId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    db.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Ad updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/home/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete("/:adId", (req, res, next) => {
    const id = req.params.adId;
    db.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Ad deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/home',
                    body: { title: 'String', cost: 'Number' }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;