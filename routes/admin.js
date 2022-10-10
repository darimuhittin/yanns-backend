const express = require("express");
const rootDir = require("../util/path");
const path = require("path");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/product-images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

const ProductModel = require("../models/product");
const adminController = require("../controllers/admin");
const { fileURLToPath } = require("url");

router.post("/products", upload.array("images"), adminController.postProducts);
router.put("/products/:id", upload.array("images"), adminController.putProduct);
router.delete("/products", adminController.deleteProducts);
// router.post("/product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });
module.exports = router;
