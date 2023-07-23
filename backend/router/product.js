const express = require("express");
const router = express.Router();

const { createProduct, updateProduct } = require("../controller/Product");
const authentication = require("../middleware/auth");

router.post("/createProduct", authentication, createProduct);
router.patch("/updateProduct", authentication, updateProduct);

module.exports = router;