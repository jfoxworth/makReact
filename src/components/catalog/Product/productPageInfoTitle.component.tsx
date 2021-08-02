
// Standard React items
import { ReactElement} from 'react';



const ProductPageInfoTitle = ({text}:{text:string}):ReactElement => {


  return(
    <h3 className="product-name">
      <var id="product-details-name">{text}</var> 
    </h3>
)
}


export default ProductPageInfoTitle