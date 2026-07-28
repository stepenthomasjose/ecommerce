
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";

import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const Collections = () => {
  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
    totalPages,
  } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchProducts({
        search,
        category,
        subCategory,
        sort,
        page,
        limit: 8,
      })
    );
  }, [dispatch, search, category, subCategory, sort, page]);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Sidebar */}
        <div className="lg:col-span-3">
          <FilterSidebar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            sort={sort}
            setSort={setSort}
            setPage={setPage}
          />
        </div>

        {/* Products */}
        <div className="lg:col-span-9">

          

          <ProductGrid
            products={products}
            loading={loading}
            error={error}
            
          />

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />

        </div>

      </div>

    </div>
  );
};

export default Collections;