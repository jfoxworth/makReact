
// Standard React items
import { ReactElement} from 'react';


type propItems = {
  children:ReactElement[]
}

const ProductPageInfoPanel = ({children}:propItems):ReactElement => {


  return(
    <div className="product-info-panel">
      <div className="inner-panel">
        <div className="panel-body">
          {children} 
        </div>
      </div>
    </div>
  )
}


export default ProductPageInfoPanel