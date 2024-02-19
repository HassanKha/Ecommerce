
'use client'

import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

function ProductSection() {
    const [productList,setProductList] = useState([]);
    useEffect(() => {
        getLastestProducts();
      }, []);
    
      const getLastestProducts = async () => { // Corrected function name
        const Data = await ProductApis.getLatestProducts();
        console.log(Data.data.data);
        setProductList(Data.data.data)
      };
    
      

  return (
    <div className="px-10 md:px-20 ">
        <h2 className="my-4 text-xl ">Our Latest Products</h2>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
