import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log(token);
  

  if (token) {
    config.headers.token = token;
  }

  return config;
});

// Admin Login
export const adminLogin = (data) =>
  API.post("/users/admin/login", data);

// Add Product
export const addProduct = (formData) =>
  API.post("/products/add", formData);

// get Product
// export const getProducts = () =>
//   API.get("/products/listproducts");
export const getProducts = (page = 1, limit = 8) =>
  API.get(`/products/listproducts?page=${page}&limit=${limit}`);

//deleteProduct
export const deleteProduct = (id) => 
  API.delete(`/products/remove/${id}`);

export default API