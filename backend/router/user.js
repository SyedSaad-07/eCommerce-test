const express = require("express");
const router = express.Router();

const { SignUp, Login, allData, mainData } = require("../controller/User");
const authentication = require("../middleware/auth")

router.post("/signup/",SignUp);
router.post("/login", authentication, Login);
router.get("/allData", authentication, allData);
router.get("/mainData", mainData);

module.exports = router;