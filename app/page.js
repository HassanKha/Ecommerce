import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import { Suspense } from 'react';
export default function Home() {
  return (
    <div className="">
      <Suspense>
  <Hero/>
  <ProductSection/>
  </Suspense>
    </div>
  );
}
