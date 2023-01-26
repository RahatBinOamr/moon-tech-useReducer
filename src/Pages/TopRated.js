import React, { useContext } from "react";
import ProductCard from "../Component/ProductCard";
import { ProductsContext } from "../Context/ProductProivider";



const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useContext(ProductsContext);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product,i) => <ProductCard key={i} product={product} />);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;