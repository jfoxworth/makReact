

// Standard React items
import { ReactElement } from 'react';

const ProductListType = ({type}:{type:string}):ReactElement => (
  
  <span className="product-description">{type}</span>
)

export default ProductListType


