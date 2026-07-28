import axios from 'axios'


const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    
})
console.log(import.meta.env.VITE_API_URL);

API.interceptors.request.use((config) => {

  return config;
});


export const getProduct = (params)=>{
   return  API.get("/products/listproducts",{params}) ;
}
 export const deleteProduct = (id)=>{
    return API.delete(`/products/remove/${id}`)
 }

 export const getLatestProducts = ()=>{
   return API.get("/products/latestproducts")
 }

 export const getBestSellerProducts=()=>{
   return API.get("/products/bestsellers")
 }

  export const getSingleProduct = (id) =>{
  return   API.get(`/products/singleproduct/${id}`);
  }

export const registerUser = (userData) =>{
 return API.post("/users/register", userData);
}

  export const loginUser =(userData)=>{
    return API.post('/users/login',userData)
  }
 export const placeOrder = (orderData) => {
  const token = localStorage.getItem("token");

  return API.post("/orders/place", orderData, {
    headers: {
      token,
    },
  });
};



export default API