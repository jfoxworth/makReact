

// Standard React items
import { ReactElement } from 'react';

type propItems = {
  children:ReactElement[]
}

const ProductListMainSection = ({children}:propItems):ReactElement => (
  
  <span className="product-info">
    {children}          
  </span>
)

export default ProductListMainSection


