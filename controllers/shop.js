const ProductModel = require("../models/product");
exports.getProducts = (req, res, next) => {
  ProductModel.find()
    .exec()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

exports.getProduct = (req, res, next) => {
  ProductModel.findOne({ _id: req.params.id })
    .exec()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
