const express = require("express");
const { tryCatch } = require("../helpers");

const router = express.Router();

const { signInHandler, signUpHandler,signOutHandler } = require("../controllers");
const { requireAuth } = require("../middleware/auth");

router.post("/signin", tryCatch(signInHandler), requireAuth);
router.post("/signup",  tryCatch(signUpHandler), requireAuth);
router.post("/signout", tryCatch(signOutHandler));

module.exports = router;
