

import React, { useState } from "react";
import { addProduct } from "../services/axiosInstance";
import upload_area from "../assets/Upload_area.png";
import { toast } from "react-toastify"

const AddProduct = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    stock: "",
    bestseller: false,
    sizes: [],
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sizeHandler = (size) => {
    setData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((item) => item !== size)
        : [...prev.sizes, size],
    }));
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("subCategory", data.subCategory);
    formData.append("stock", data.stock);
    formData.append("bestseller", data.bestseller);
    formData.append("sizes", JSON.stringify(data.sizes));

    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    try{
      const res = await addProduct(formData);
      console.log(res.FormData?.data?.message);
      if(res.data.success){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
      
    }catch(error){
       console.log(error);
             toast.error(error.response?.data?.message || error.message);
    }

    console.log([...formData.entries()]);

     
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-4xl mx-auto p-5 space-y-5"
    >
      {/* Images */}
      <div>
        <p className="font-semibold mb-3">Upload Images</p>

        <div className="flex gap-3 flex-wrap">
          <label htmlFor="image1">
            <img
              src={image1 ? URL.createObjectURL(image1) : upload_area}
              alt=""
              className="w-28 cursor-pointer"
            />
            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>

          <label htmlFor="image2">
            <img
              src={image2 ? URL.createObjectURL(image2) : upload_area}
              alt=""
              className="w-28 cursor-pointer"
            />
            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>

          <label htmlFor="image3">
            <img
              src={image3 ? URL.createObjectURL(image3) : upload_area}
              alt=""
              className="w-28 cursor-pointer"
            />
            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>

          <label htmlFor="image4">
            <img
              src={image4 ? URL.createObjectURL(image4) : upload_area}
              alt=""
              className="w-28 cursor-pointer"
            />
            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* Name */}
      <div>
        <p>Product Name</p>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
          className="border w-full p-2 rounded"
          placeholder="Enter product name"
        />
      </div>

      {/* Description */}
      <div>
        <p>Description</p>
        <textarea
          name="description"
          rows="5"
          value={data.description}
          onChange={changeHandler}
          className="border w-full p-2 rounded"
          placeholder="Write description..."
        />
      </div>

      {/* Price */}
      <div>
        <p>Price</p>
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={changeHandler}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Category */}
      <div>
        <p>Category</p>
        <select
          name="category"
          value={data.category}
          onChange={changeHandler}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      {/* Sub Category */}
      <div>
        <p>Sub Category</p>
        <select
          name="subCategory"
          value={data.subCategory}
          onChange={changeHandler}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Sub Category</option>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      {/* Stock */}
      <div>
        <p>Stock</p>
        <input
          type="number"
          name="stock"
          value={data.stock}
          onChange={changeHandler}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2">Sizes</p>

        <div className="flex gap-3 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              type="button"
              key={size}
              onClick={() => sizeHandler(size)}
              className={`px-4 py-2 border rounded ${
                data.sizes.includes(size)
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="bestseller"
          checked={data.bestseller}
          onChange={changeHandler}
        />
        <label>Bestseller</label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default AddProduct;