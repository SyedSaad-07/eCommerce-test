const express = require("express");
const router = express.Router();

const { createStore, changeActive } = require("../controller/Store");
const authentication = require("../middleware/auth");

router.post("/createStore", authentication, createStore);
router.patch("/changeActiveness", authentication, changeActive);

module.exports = router;