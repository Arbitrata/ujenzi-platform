const express = require("express");
const { tryCatch } = require("../helpers");

const router = express.Router();

const { signInHandler, signUpHandler } = require("../controllers");

router.post("/signin", tryCatch(signInHandler));
router.post("/signup", tryCatch(signUpHandler));

module.exports = router;
