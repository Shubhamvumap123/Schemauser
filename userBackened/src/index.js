
const express = require("express");
const cors = require("cors");
const userController = require("./controller/userController")
var app = express();


app.use(cors());
app.use(express.json());

app.use("/users", userController);
module.exports=app
