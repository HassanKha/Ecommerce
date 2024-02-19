import React from "react";

function SkeletonProductInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[20px] w-[400px] animate-pulse bg-slate-200"></div>

      <div className="h-[20px] w-[70px] animate-pulse bg-slate-200"></div>

      <div className='h-[20px] w-[400px] animate-pulse bg-slate-200'></div>
      <div className='h-[20px] w-[400px] animate-pulse bg-slate-200'></div>
      <div className='h-[20px] w-[400px] animate-pulse bg-slate-200'></div>
      <div className='h-[20px] w-[100px] animate-pulse bg-slate-200'></div>

    </div>
  );
}

export default SkeletonProductInfo;
