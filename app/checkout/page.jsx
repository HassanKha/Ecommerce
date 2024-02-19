
import { Suspense } from 'react';
import Checkout from '../checkout/_components/Checkout';


function CheckoutPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
 <Checkout/>
  </Suspense>
  )
}

export default CheckoutPage