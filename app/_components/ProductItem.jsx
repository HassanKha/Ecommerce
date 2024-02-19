import React from 'react'
import Image from 'next/image'
import {List} from 'lucide-react'
import Link from 'next/link'

function ProductItem({product}) {
  return (
    <Link href={`/product/${product?.id}`} className='hover:border p-1 hover:shadow-md hover:rounded-md border-teal-400' >
        <Image src={product?.attributes?.banner?.data?.attributes?.url}
        alt='banner-card'
        width={400}
        height={350}
        className='rounded-t-lg h-[170px] object-cover'
        />
        {/* {product?.attributes?.title} */}
      <div className='flex justify-between items-center bg-gray-50 rounded-b-md p-3'>
      <div className=''>
            <h2 className='text-[12px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
            <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'> <List className='w-4 h-4' /> {product?.attributes?.category}</h2>
           
        </div>

        <h2>{product?.attributes?.price}</h2>
      </div>
        
        </Link>
  )
}

export default ProductItem