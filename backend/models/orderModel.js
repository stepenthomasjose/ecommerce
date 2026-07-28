const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // User who placed the order
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },

    // Ordered products
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        image: {
          type: [String],
          default: [],
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
        },

        size: {
          type: String,
          required: true,
        },
      },
    ],

    // Shipping Address
    address: {
      firstName: {
        type: String,
        required: true,
      },

      lastName: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      street: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

      zipcode: {
        type: String,
        required: true,
      },

      country: {
        type: String,
        required: true,
      },
    },

    // Total Amount
    amount: {
      type: Number,
      required: true,
    },

    // Payment Method
    paymentMethod: {
      type: String,
      enum: ["COD"],
      default: "COD",
    },

    // Payment Status
    payment: {
      type: Boolean,
      default: false,
    },

    // Order Status
    status: {
      type: String,
      default: "Order Placed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);