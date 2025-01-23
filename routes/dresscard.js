const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const DressCard = require("../models/dresscard.js");
const {isLoggedIn,isOwner,validateDressCard} = require("../middleware.js");
const dresscardController = require("../controllers/dresscard.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage})
const flash = require("connect-flash");

router
    .route("/")
    .get(wrapAsync(dresscardController.sort))
    .get(wrapAsync(dresscardController.index))
    .post(isLoggedIn,upload.single('dresscard[image]'),validateDressCard,wrapAsync(dresscardController.create));

router.get("/new",isLoggedIn,wrapAsync(dresscardController.new));
router.get("/category/:category",wrapAsync(dresscardController.category));
router.get("/search/:title",wrapAsync(dresscardController.search));
router.get("/wishlist",wrapAsync(dresscardController.wishlist));
router.get("/i/:value",wrapAsync(dresscardController.output));
router
    .route("/:id")
    .get(wrapAsync(dresscardController.show))
    .put(isLoggedIn,isOwner,upload.single('dresscard[image]'),validateDressCard,wrapAsync(dresscardController.update))
    .delete(isLoggedIn,isOwner,wrapAsync(dresscardController.delete));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(dresscardController.edit));
router.put("/:id/wishlist",wrapAsync(dresscardController.addlike));
module.exports = router;