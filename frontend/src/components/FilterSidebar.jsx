import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const FilterSidebar = ({
  search,
  setSearch,
  category,
  setCategory,
  subCategory,
  setSubCategory,
  sort,
  setSort,
  setPage,
}) => {
  return (
    <aside className="w-full bg-white rounded-2xl border shadow-md p-6 sticky top-24">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FaFilter className="text-lg" />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>

      {/* Search */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Search
        </label>

        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="w-full border rounded-lg pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Category
        </h3>

        <div className="space-y-2">

          {["", "Men", "Women", "Kids"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={item}
                checked={category === item}
                onChange={(e) => {
                  setPage(1);
                  setCategory(e.target.value);
                }}
              />

              {item === "" ? "All" : item}
            </label>
          ))}

        </div>
      </div>

      {/* Sub Category */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Sub Category
        </h3>

        <div className="space-y-2">

          {["", "Topwear", "Bottomwear", "Winterwear"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="subcategory"
                value={item}
                checked={subCategory === item}
                onChange={(e) => {
                  setPage(1);
                  setSubCategory(e.target.value);
                }}
              />

              {item === "" ? "All" : item}
            </label>
          ))}

        </div>
      </div>

      {/* Sort */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => {
            setPage(1);
            setSort(e.target.value);
          }}
          className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Newest</option>
          <option value="price_asc">Price : Low → High</option>
          <option value="price_desc">Price : High → Low</option>
        </select>
      </div>

      {/* Clear */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("");
          setSubCategory("");
          setSort("");
          setPage(1);
        }}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Clear Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;