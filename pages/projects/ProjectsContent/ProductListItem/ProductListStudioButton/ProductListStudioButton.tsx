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
import FaIcon from '../../../../../src/components/FaIcon/FaIcon';

const ProductListStudioButton = ():ReactElement => (
  
  <span className="actions">
    <span className="like">
      <span className="has-simple-popover" >
        <FaIcon icon={'cog'} />
      </span>
    </span>
  </span>
)

export default ProductListStudioButton


