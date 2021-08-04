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


const ProductPageInfoCat = ({text}:{text:string}):ReactElement => {


  return(
    <span id="product-details-sku">{text}</span>
  )
}


export default ProductPageInfoCat