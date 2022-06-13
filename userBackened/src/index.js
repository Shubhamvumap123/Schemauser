
const express = require("express");
const cors = require("cors");
const userController = require("./controller/userController");
const brandController = require("./controller/BrandController");
const productController = require("./controller/ProductController");
const orderController = require("./controller/OrderController")
var app = express();
app.use(express.json());
app.use(cors()); 

app.use("/users", userController);
app.use("/product", productController);
app.use("/brand", brandController);
app.use("/order", orderController);
module.exports=app
