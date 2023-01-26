import React, { createContext, useEffect, useReducer } from "react";
import { actionType } from "../state/ProductState/ActionType";
import { initialState, productReducer } from "../state/ProductState/ProductReducer";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {


  const [state, dispatch]=useReducer(productReducer, initialState)
  useEffect(() => {
    dispatch({type: actionType.FETCHING_START})
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => dispatch({type:actionType.FETCHING_SUCCESS, payload:data}))
      .catch(()=>{
        dispatch({type: actionType.FETCHING_ERROR})
      })
  }, []);
//  console.log(state);
  const value = {
    state,
    dispatch
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
