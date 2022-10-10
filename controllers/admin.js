const ProductModel = require("../models/product");

const postProducts = (req, res, next) => {
  const product = new ProductModel({
    ...req.body,
    images: req.files.map((file) => file.filename),
  });
  product
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "Creation of product successful.", product });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const putProduct = (req, res, next) => {
  if (req.files) {
    console.log("here");
    console.log(req.files.map((file) => file.filename));
    ProductModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body, images: req.files.map((file) => file.filename) },
      {
        new: true,
      }
    )
      .exec()
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  } else {
    console.log("here without file");
    ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .exec()
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  }
};

const deleteProducts = (req, res, next) => {
  const ids = req.body.data.ids;
  ProductModel.deleteMany({ _id: { $in: ids } })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => next(err));
};
module.exports = { postProducts, putProduct, deleteProducts };
