import { ProductLinks } from './ProductLinks'
const Product = ({ product }) => {
  {
    console.log(product)
  }
  return (
    <div
      key={`${product.title}-${product._id}`}
      className='col-sm-6 col-md-4 col-lg-4'
    >
      <ProductLinks
        {...product}
        // title={product.title}
        // images={product.image}
        // props={product}
      />
    </div>
  )
}
export default Product
