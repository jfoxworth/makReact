
// Standard React items
import { ReactElement} from 'react';



const ProductPageInfoDesc = ({text}:{text:string}):ReactElement => {


  return(
    <p id="product-details-shortDesc" 
       className="product-description">
         {text}
    </p>
    )
}


export default ProductPageInfoDesc