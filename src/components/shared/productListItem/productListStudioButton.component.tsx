

// Standard React items
import { ReactElement } from 'react';
import FaIcon from '../faIcons/faIcon.component';

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


