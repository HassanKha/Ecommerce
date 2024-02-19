import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {

   
  return (
    <div className='grid gap-3 grid-cols-2 sm:grid-col-3 md:grid-col-4'>
    {productList && productList?.map((item) => (
      <div key={item.id}>
        <ProductItem product={item}/>
      </div>
    ))}
  </div>
  );
}

export default ProductList;
