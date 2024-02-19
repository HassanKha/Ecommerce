import { useUser } from "@clerk/nextjs";
import { CartContext } from "../.../../../_context/CartContext";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import OrderApis from "../../_utils/OrderApis";
import CartsAois from "../../_utils/CartsAois";

const CheckoutForm = ({amount}) => {
    const {cart,setCart} = useContext(CartContext);
    const {user} = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
const [loading,setLoading]= useState(false);
const [errormessage,setErrorMessage]= useState();
console.log(amount)
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
      }

      createOrder();
      sendEmail();
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
console.log(amount)
    const res = await fetch("api/intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret: clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/paymentconfirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
     // router.push('/paymentconfirm');

     setCart([]);
    }
  };
const createOrder = async () => {


    let productIds=[];
    cart.forEach(el=> {
        productIds.push(el?.product?.id)
    })
    const data = {
        data: {
            email:user.primaryEmailAddress.emailAddress,
            username: user.fullName,
            amount,
            products:productIds
        }
    }
 const res=  await  OrderApis.createOrder(data)

 if(res){
console.log(cart)
    cart.forEach(el => {
        CartsAois.delCarts(el?.id).then(result => {
            console.log(result)
        })})
 }
}

const sendEmail = async () => {
    const res = await fetch("api/email", {
        method: "POST",
        body: JSON.stringify({
            amount: amount,
            email: user.primaryEmailAddress.emailAddress,
            fullName: user.fullName
        })
      });

      console.log('email',res)
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="bg-primary mt-4 text-white rounded-md p-2 w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
