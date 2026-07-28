import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProducts,fetchBestSellerProducts } from "../features/products/productSlice";
import LatestProduct from "../components/LatestProduct";
import BestSeller from "../components/BestSeller";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

const Home = () => {
  const dispatch = useDispatch();

  const {  latestProducts, bestSellerProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
      dispatch(fetchLatestProducts());
     dispatch(fetchBestSellerProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div> 
      <Hero/>
     <LatestProduct products = {latestProducts} showCart={false}/>
     <BestSeller products={bestSellerProducts} showCart={false}/>
    </div>
  );
};

export default Home;