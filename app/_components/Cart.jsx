import Link from "next/link";
import { CartContext } from "../_context/CartContext";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const getTotal = () => {
    let totalamount = 0;

    cart.forEach((item) => {
      totalamount = totalamount + Number(item?.product?.attributes?.price);
    });

    return totalamount;
  };
  const router = useRouter();
  return (
    <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt="banner"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.attributes?.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">{item?.product?.attributes?.category}</dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">{item?.product?.attributes?.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cart?.length})
          </Link>

          <a
              onClick={()=> router.push(`/checkout?amount=${getTotal()}`)}
            className="block rounded cursor-pointer bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </a>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
