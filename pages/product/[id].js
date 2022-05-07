import React from 'react'
import { useRouter } from 'next/router'

function ProductItem() {
  const router = useRouter();
  return (
    <div>
      Product {router.query.id}
    </div>
  )
}

export default ProductItem