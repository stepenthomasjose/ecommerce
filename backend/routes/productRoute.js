const express = require("express");
const upload = require("../middleware/multer");
const productRouter = express.Router();
const { addProduct,getAllProduct, getProductId,updateProduct, deleteProduct,getLatestProduct,getBestSellersProduct  } = require("../controllers/productController");
const adminAuth = require("../middleware/adminAuth");

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct,
);



productRouter.get("/listproducts",getAllProduct)
productRouter.get("/singleproduct/:id",getProductId)
productRouter.get('/latestproducts',getLatestProduct)
productRouter.get("/bestsellers",  getBestSellersProduct);

productRouter.put('/updateproduct/:id',adminAuth,updateProduct)

productRouter.delete('/remove/:id',adminAuth,deleteProduct)




module.exports = productRouter;
