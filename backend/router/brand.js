const express = require("express");
const router = express.Router();

const { createBrand, isBrandExist, changeActive } = require("../controller/Brand");
const authentication = require("../middleware/auth");

router.post("/createBrand", authentication, createBrand);
router.get("/isBrandExist", authentication, isBrandExist);
router.patch("/changeActiveness", authentication, changeActive);

module.exports = router;