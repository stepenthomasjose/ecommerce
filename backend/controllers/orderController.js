// const Order = require("../models/orderModel");

// // Place Order
// const placeOrder = async (req, res) => {
//   try {
//     const {
//       items,
//       address,
//       amount,
//       paymentMethod,
//     } = req.body;
//     const userId = req.user.id;

//     // Validation
//     if (!userId || !items || items.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Order items are required",
//       });
//     }

//     const order = await Order.create({
//       userId,
//       items,
//       address,
//       amount,
//       paymentMethod: paymentMethod || "COD",
//       payment: false,
//       status: "Order Placed",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully",
//       order,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   placeOrder,
// };


const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {
  try {
    const { items, address, amount, paymentMethod } = req.body;

    const userId = req.user.id;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order items are required",
      });
    }

    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentMethod: paymentMethod || "COD",
      payment: false,
      status: "Order Placed",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
};