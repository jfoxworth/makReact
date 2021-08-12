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
import { FC, ReactElement } from 'react';

// Models
import makDesign from '../../../../../src/types/makDesign';
import makProject from '../../../../../src/types/makProject';

interface propType {
  thisDesign:makDesign,
  thisProject:makProject
}

const ProductListType:FC<propType> = ({thisDesign, thisProject}:propType):ReactElement => (
  
  <span className="product-description">{thisDesign.title} - {thisProject.designType}</span>
)

export default ProductListType


