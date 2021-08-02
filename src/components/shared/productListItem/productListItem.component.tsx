

// Standard React items
import { ReactElement } from 'react';

// Outside component
import ProductListImage from './productListImage.component';
import ProductListTitle from './productListTitle.component';
import ProductListPrice from './productListPrice.component';
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
ProductListItem.ProductListPrice = ProductListPrice;
ProductListItem.ProductListStudioButton = ProductListStudioButton;
ProductListItem.ProductListDescription = ProductListDescription;


export default ProductListItem


