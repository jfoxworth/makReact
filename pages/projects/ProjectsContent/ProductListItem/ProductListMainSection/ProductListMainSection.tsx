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


