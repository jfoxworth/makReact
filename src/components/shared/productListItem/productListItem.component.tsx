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

// Outside component
import ProductListImage from './productListImage.component';
import ProductListTitle from './productListTitle.component';
import ProductListDate from './productListDate.component';
import ProductListType from './productListType.component';
import ProductListDescription from './productListDescription.component';
import ProductListMainSection from './productListMainSection.component';
import ProductListStudioButton from './productListStudioButton.component';

type propItems = {
  children:ReactElement[]
}


const ProductListItem = ({children}:propItems):ReactElement => (
  
  <li className="flat-card product-container is-auto is-list-item" >

    { children }
  
  </li>
)


ProductListItem.ProductListImage = ProductListImage;
ProductListItem.ProductListMainSection = ProductListMainSection;
ProductListItem.ProductListTitle = ProductListTitle;
ProductListItem.ProductListType = ProductListType;
ProductListItem.ProductListDate = ProductListDate;
ProductListItem.ProductListStudioButton = ProductListStudioButton;
ProductListItem.ProductListDescription = ProductListDescription;


export default ProductListItem


