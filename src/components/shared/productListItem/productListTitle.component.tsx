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

// Models
import makProject from '../../../types/makProject';

// Components
import Link from 'next/dist/client/link';


interface propType {
  thisProject : makProject
}


const ProductListTitle = ({thisProject}:propType):ReactElement => (
  
  <Link href={`/projects/${thisProject.id}`} >
    <a className="product-details-link" >
      <span className="product-name">{thisProject.name}</span>
    </a>
  </Link>
)

export default ProductListTitle


