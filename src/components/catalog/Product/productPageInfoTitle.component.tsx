/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/

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