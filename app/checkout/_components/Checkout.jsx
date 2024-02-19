'use client'

import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);


function Checkout() {
const searchParams = useSearchParams()
console.log(Number(searchParams.get('amount')))
    const options = {
       mode: 'payment',
       currency: 'usd',
       amount: Number(searchParams.get('amount'))*100
      };
  return (
    <Suspense>
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm amount={Number(searchParams.get('amount'))}/>
  </Elements>
  </Suspense>
  )
}

export default Checkout