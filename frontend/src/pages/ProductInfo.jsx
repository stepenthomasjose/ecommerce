import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import {toast} from 'react-toastify'

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct, loading } = useSelector((state) => state.products);

  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleProduct?.image?.length > 0) {
      setImage(singleProduct.image[0]);
    }
  }, [singleProduct]);

  if (loading) {
    return <h2 className="text-center text-2xl mt-20">Loading...</h2>;
  }

  if (!singleProduct) {
    return <h2 className="text-center text-2xl mt-20">Product not found</h2>;
  }


  const handleAddToCart = () => {
  if (!selectedSize) {
    toast.error("Please select a size");
    return;
  }

  dispatch(
    addToCart({
      ...singleProduct,
      size: selectedSize,
    })
  );

  toast.success("Added to cart");
};
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          {/* Main Image */}
          <img
            src={`http://localhost:5001/uploads/images/${image}`}
            alt={singleProduct.name}
            className="w-full size-96 object-cover rounded-lg border"
          />

          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-4">
            {singleProduct.image?.map((img) => (
              <img
                key={img.fileId}
                src={img.url}
                alt={singleProduct.name}
                onClick={() => setImage(img)}
                className={`w-20 h-20 rounded-lg object-cover cursor-pointer border-2 ${
                  image === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          {singleProduct.bestseller && (
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              ⭐ Bestseller
            </span>
          )}

          <h1 className="text-4xl font-bold">{singleProduct.name}</h1>

          <p className="text-gray-500 mt-2">{singleProduct.category}</p>

          <p className="text-gray-600 mt-5 leading-7">
            {singleProduct.description}
          </p>

          <p className="text-3xl font-bold text-red-500 mt-6">
            ₹{singleProduct.price}
          </p>

          {/* Sizes */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Select Size</h3>

            <div className="flex flex-wrap gap-3">
              {singleProduct.sizes?.map((size) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={size}
                  className={`px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <NavLink to="/cart">
                <button onClick={handleAddToCart} className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                  Add To Cart
                </button>
            </NavLink>

            <button className="border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
