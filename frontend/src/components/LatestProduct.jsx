
import React from "react";
import ProductCard from "./ProductCard";

const LatestProduct = ({ products=[] }) => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center">
        LATEST PRODUCTS
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Our latest collections
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;