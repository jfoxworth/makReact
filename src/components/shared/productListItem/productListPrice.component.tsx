

// Standard React items
import { ReactElement } from 'react';

type propItems = {
  children:ReactElement[]
}

const ProductListPrice = ():ReactElement => (
  
  <span className="product-price">
    <span>45.00</span>
  </span>
)

export default ProductListPrice


