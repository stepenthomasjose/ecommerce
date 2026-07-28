import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12">

      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className="px-5 py-2 border rounded-lg font-medium
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-black hover:text-white transition"
      >
        ← Previous
      </button>

      <span className="px-5 py-2 bg-black text-white rounded-lg font-semibold">
        Page {page}
      </span>

      <button
        disabled={totalPages ? page === totalPages : false}
        onClick={() => setPage((prev) => prev + 1)}
        className="px-5 py-2 border rounded-lg font-medium
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-black hover:text-white transition"
      >
        Next →
      </button>

    </div>
  );
};

export default Pagination;