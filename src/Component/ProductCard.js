import React, { useContext } from "react";
import { BiListPlus } from "react-icons/bi";
import { ProductsContext } from "../Context/ProductProivider";
import { actionType } from "../state/ProductState/ActionType";



const ProductCard = ({ product }) => {
  const { dispatch } = useContext(ProductsContext)
console.log(product);
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() =>
            dispatch({ type: actionType.ADD_TO_CART, payload: product }) 
          }
        >
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
          onClick={() =>
            dispatch({ type: actionType.REMOVE_CART_ITEM, payload: product.id }) 
          }
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;