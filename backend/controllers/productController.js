const Product = require("../models/productModel");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      stock,
      bestseller,
    } = req.body;

    const image1 = req.files.image1?.[0].filename || "";
    const image2 = req.files.image2?.[0].filename || "";
    const image3 = req.files.image3?.[0].filename || "";
    const image4 = req.files.image4?.[0].filename || "";

    console.log(req.files);
    const images = [image1, image2, image3, image4].filter(Boolean);

    const product = new Product({
      name,
      description,
      price,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      stock,
      bestseller: bestseller === "true" ? true : false,
      image: images,
    });

    await product.save();

    res.json({
      success: true,
      message: "Product Added",
      product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




const getAllProduct = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 8,
      category,
      subCategory,
      search,
      sort,
    } = req.query;

    const query = {};

    // Category filter
    if (category) {
      query.category = category;
    }

    // Subcategory filter
    if (subCategory) {
      query.subCategory = subCategory;
    }

    // Search by product name
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Sorting
    let sortOption = { date: -1 };

    if (sort === "price_asc") {
      sortOption = { price: 1 };
    }

    if (sort === "price_desc") {
      sortOption = { price: -1 };
    }

    const skip = (Number(page) - 1) * Number(limit);

    const totalProducts = await Product.countDocuments(query);

    const products = await Product.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      currentPage: Number(page),
      totalPages: Math.ceil(totalProducts / Number(limit)),
      totalProducts,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




const getProductId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
    }
    const product = await Product.findById(id);

    if (!product) {
    return  res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update product

const updateProduct = async (req,res)=>{
 try{
    const {id} = req.params
  const updatedProduct =  await Product.findByIdAndUpdate(
    id,req.body,
    {
       returnDocument: "after",
      runValidators:true,
    }
  )

  if(!updatedProduct){
    return res.status(400).json({
      success:false,
      message:"product not found"
    })
  }

  res.status(200).json({
    success:true,
    message:"product updated successfully",
  })
 }catch(error){
   res.status(500).json({
    success:false,
    message:error.message
   })
 }
}


const deleteProduct = async(req,res)=>{
  try{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      })
    }
    const product = await Product.findByIdAndDelete(id)

    if(!product){
      return res.status(404).json({
        success:false,
        message:"product not found",
      })
    }

    res.status(200).json({
      success:true,
      message:"product deleted successfully",
      product,
    })
  }catch(error){
     res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const getLatestProduct = async (req,res)=>{
  try{
    const limit = Number(req.query.limit) || 4;
    const products = await Product.find()
    .sort({date:-1})
    .limit(limit)

    res.status(200).json({
      success:true,
      products
    })
  }catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const getBestSellersProduct = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 4;

    const products = await Product.find({
      bestseller: true,
    }).limit(limit);

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  addProduct,
  getAllProduct,
  getProductId,
  updateProduct,
  deleteProduct,
  getLatestProduct,
  getBestSellersProduct,
};
