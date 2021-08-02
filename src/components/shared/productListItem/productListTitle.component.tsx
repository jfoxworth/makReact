

// Standard React items
import { ReactElement } from 'react';

const ProductListTitle = ({title}:{title:string}):ReactElement => (
  
    <a className="product-details-link" 
       href="product.html">
      <span className="product-name">{title}</span>
    </a>
)

export default ProductListTitle


