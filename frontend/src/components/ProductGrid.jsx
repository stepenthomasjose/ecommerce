import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, loading, error,showCart=false }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="text-lg font-medium">Loading Products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-80">
        <h2 className="text-2xl font-semibold text-gray-500">
          No Products Found
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">
            Collections
          </h2>

          <p className="text-gray-500 mt-1">
            {products.length} Products
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            showCart={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;