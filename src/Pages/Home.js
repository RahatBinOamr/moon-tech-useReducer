import React, { useContext } from "react";
import ProductCard from "../Component/ProductCard";
import { ProductsContext } from "../Context/ProductProivider";

const Home = () => {
  const {state:{products,error,loading} }= useContext(ProductsContext);
  // console.log(products);
  let content
  if(loading){
    content=<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;
