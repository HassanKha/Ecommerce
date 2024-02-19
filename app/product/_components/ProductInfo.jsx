"use client";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartsAois from "/app/_utils/CartsAois";
import { CartContext } from "../../_context/CartContext";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
const {cart,setCart} = useContext(CartContext)
  const handleAddToCart = async () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
     
     await CartsAois.addToCart(data);
 
     setCart([...cart,{
        id: data?.data?.data?.id,
        product
     }])
    }
  };
  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px] mt-5">
            {product?.attributes?.description[0]?.children[0]?.text}
          </h2>
          <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="h-5 w-5 text-green-500 " />
            ) : (
              <AlertOctagon />
            )}{" "}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[32px] text-primary mt-3">
            ${product?.attributes?.price}
          </h2>

          <button
            onClick={() => handleAddToCart()}
            className="flex p-3 text-white rounded-lg gap-2 hover:bg-teal-600 bg-primary"
          >
            {" "}
            <ShoppingCart /> Add to Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
