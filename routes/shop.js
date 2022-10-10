const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/products", shopController.getProducts);
router.get("/products/:id", shopController.getProduct);
module.exports = router;
