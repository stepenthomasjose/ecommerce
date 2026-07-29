const Product = require("../models/productModel");
const mongoose = require("mongoose");
const imagekit = require("../config/imagekit");
const fs = require("fs");

// const addProduct = async (req, res) => {
 
//   try {
//     const {
//       name,
//       description,
//       price,
//       category,
//       subCategory,
//       sizes,
//       stock,
//       bestseller,
//     } = req.body;

//     const imageFiles = [
//       req.files?.image1?.[0],
//       req.files?.image2?.[0],
//       req.files?.image3?.[0],
//       req.files?.image4?.[0],
//     ].filter(Boolean);

//     if (imageFiles.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Please upload at least one image",
//       });
//     }

//     const images = [];

//     for (const file of imageFiles) {
   
//        const result = await cloudinary.uploader.upload(file.path, {
//          folder: "XY-STORE/products",
//      });
  
     
//       images.push({
//   url: result.secure_url,
//   public_id: result.public_id,
// });
// fs.unlinkSync(file.path);
//     }

//     const product = await Product.create({
//       name,
//       description,
//       price,
//       category,
//       subCategory,
//       sizes: JSON.parse(sizes),
//       stock: Number(stock),
//       bestseller: bestseller === "true",
//       image: images,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

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

    const imageFiles = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0],
    ].filter(Boolean);

    if (imageFiles.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please upload at least one image",
      });
    }

    const images = [];

    for (const file of imageFiles) {
      // Upload image to ImageKit
      const result = await imagekit.upload({
        file: fs.readFileSync(file.path),
        fileName: file.originalname,
        folder: "/XY-STORE/products",
      });

      images.push({
        url: result.url,
        fieldId: result.fileId,
      });

      // Delete local file after successful upload
      fs.unlinkSync(file.path);
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      stock: Number(stock),
      bestseller: bestseller === "true",
      image: images,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    console.error(error);

    // Delete uploaded temp files if an error occurs
    if (req.files) {
      Object.values(req.files)
        .flat()
        .forEach((file) => {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
          }
        });
    }

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


// const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid Product ID",
//       });
//     }

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     for (const image of product.image) {
//       await imagekit.deleteFile(image.fieldId);
//     }

//     await Product.findByIdAndDelete(id);

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const deleteProduct = async (req, res) => {
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
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete images from ImageKit
    for (const image of product.image) {
      if (image.fileId) {
        await imagekit.deleteFile(image.fileId);
      }
    }

    // Delete product from MongoDB
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

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
