const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport")

// Matches with "/api/users"
router.route("/")
.post(userController.create)

router.route("/:id")
.get(userController.findUser)

router.route("/email/:id")
.get(userController.findEmail)

router.route("/login/:user/:pass")
.get(userController.loginUser)

router.route("/updateUser/:olduser/:newuser")
.put(userController.updateUser)

router.route("/updatePassword/:user/:pass")
.put(userController.updatePassword)

router.post(
    "/login",
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        
        console.log('logged in', req.user);
       // console.log(req)
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get("/", (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})


module.exports = router;
