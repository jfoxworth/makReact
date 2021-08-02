
// Standard React items
import { ReactElement} from 'react';



const ProductPageInfoCat = ({text}:{text:string}):ReactElement => {


  return(
    <span id="product-details-sku">{text}</span>
  )
}


export default ProductPageInfoCat