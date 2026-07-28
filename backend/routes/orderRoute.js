const express = require("express");
const orderRouter = express.Router();

const { placeOrder } = require("../controllers/orderController");
const authUser = require("../middleware/authUser");

orderRouter.post("/place",authUser, placeOrder);

module.exports = orderRouter;