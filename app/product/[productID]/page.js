"use client";

import BreakCrumb from "/app/_components/BreakCrumb";
import ProductApis from "/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "/app/_components/ProductList";
import { usePathname } from "next/navigation";


function ProductDetails({ params }) {
    const [productDetails , setProductDetails] = useState({})
    const [productCat, setProductDetailsCat] = useState([])
const path = usePathname();
  useEffect(() => {
    GetProductById();
  }, []);
  const GetProductById = async () => {
    const product = await ProductApis.getProductById(params?.productID);
    console.log(product.data.data);
    setProductDetails(product.data.data)
    GetProductByCat(product.data.data)

  };

  const GetProductByCat = async (Product) => {
    const product = await ProductApis.getProductByCat(Product?.attributes?.category);
    console.log(product.data.data);
   setProductDetailsCat(product?.data?.data)
  };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreakCrumb path={path} />
      <div className="mt-10 gap-5  grid grid-cols-1  justify-around sm:grid-cols-2 ">
        <ProductBanner product={productDetails}/>
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl ">Similar Products</h2>
        {productCat && <ProductList productList={productCat}/>}
      </div>
    </div>
  );
}

export default ProductDetails;
