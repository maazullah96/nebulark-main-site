import { useDispatch, useSelector } from 'react-redux'

import {
  fetchProducts,
  getAllProducts,
  getProductsError,
  getProductsStatus
} from './productsSlice'
import Product from './Product'

import { useEffect } from 'react'

const ProductsList = () => {
  const productsStatus = useSelector(getProductsStatus)
  const productsError = useSelector(getProductsError)
  const products = useSelector(getAllProducts)
  const dispatch = useDispatch()

  //   return <div>ProductsList</div>

  useEffect(() => {
    if (productsStatus == 'idle') {
      dispatch(fetchProducts())
    }
  })

  let content = ''
  if (productsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (productsStatus === 'succeeded') {
    content = products.map((product, i) => {
      console.log(product)
      return <Product key={i} product={product} />
    })
  } else if (productsStatus === 'failed') {
    content = <p>{productsError}</p>
  }

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Products</h2>
          <p>List of Products we are currently working on</p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList
