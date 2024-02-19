import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
  const URL = product?.attributes?.banner?.data?.attributes?.url;
  return (
    <div>
      {URL ?  
        <Image alt="banner" className="rounded-md" priority width={400} height={400} src={URL} />
      :
      <div className="w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse"></div>
}
    </div>
  );
}

export default ProductBanner;
