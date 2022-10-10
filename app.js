const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use(express.static("images/product-images/"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

mongoose
  .connect(
    "mongodb+srv://darimuhittin:sX03leMRcoS5T6eP@cluster0.wwirh.mongodb.net/yanns?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Listening on port: 8080");
    });
  })
  .catch((err) => {
    console.log("ERROR : Cannot connect to database ...");
    console.log("ERR MESSAGE : ", err);
  });
