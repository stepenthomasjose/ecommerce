import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProduct,
  getLatestProducts,
  getBestSellerProducts,
  getSingleProduct,
} from "../../services/axiosInstances";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (filters, thunkAPI) => {
//     console.log("Thunk started");
//     try {
//       const { data } = await getProduct(filters);
//       console.log(data);

//       if (data.success) return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data);
//     }
//   },
// );

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters, thunkAPI) => {
    try {
      const { data } = await getProduct(filters);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export const fetchLatestProducts = createAsyncThunk(
  "products/fetchLatestProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await getLatestProducts();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchBestSellerProducts = createAsyncThunk(
  "products/fetchBestSellerProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await getBestSellerProducts();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchGetSingleProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await getSingleProduct(id);
      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    latestProducts: [],
    bestSellerProducts: [],
    singleProduct: null,

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.products = action.payload.products;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(fetchLatestProducts.fulfilled, (state, action) => {
        state.latestProducts = action.payload;
      })

      .addCase(fetchBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      });
  },
});

export default productSlice.reducer;
