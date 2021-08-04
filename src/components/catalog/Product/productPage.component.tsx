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

// Components
import ProductPageImagePanel from './productPageImagePanel.component';
import ProductPageInfoPanel from './productPageInfoPanel.component';
import ProductPageInfoTitle from './productPageInfoTitle.component';
import ProductPageInfoCat from './productPageInfoCat.component';
import ProductPageInfoDesc from './productPageInfoDesc.component';
import ProductPagePrice from './productPagePrice.component';
import ProductPageButton from './productPageButton.component';
import ProductPageBack from './productPageBack.component';
import ProductPageProjectListSection from './productPageProjectListSection.component';
import ProductPageProjectList from './productPageProjectList.component';
import ProductPageProjectListTitle from './productPageProjectListTitle.component';
import ProductPageProjectListItem from './productPageProjectListItem.component';

type propItems = {
  children:ReactElement[]
}


const ProductPage = ({children}:propItems):ReactElement => {


  return(
    
    <div className="product-container" >
      {children}
    </div>

  )

}

ProductPage.ProductPageImagePanel = ProductPageImagePanel;
ProductPage.ProductPageInfoPanel = ProductPageInfoPanel;
ProductPage.ProductPageInfoTitle = ProductPageInfoTitle;
ProductPage.ProductPageInfoCat = ProductPageInfoCat;
ProductPage.ProductPageInfoDesc = ProductPageInfoDesc;
ProductPage.ProductPagePrice = ProductPagePrice;
ProductPage.ProductPageButton = ProductPageButton;
ProductPage.ProductPageBack = ProductPageBack;
ProductPage.ProductPageProjectListSection = ProductPageProjectListSection;
ProductPage.ProductPageProjectList = ProductPageProjectList;
ProductPage.ProductPageProjectListTitle = ProductPageProjectListTitle;
ProductPage.ProductPageProjectListItem = ProductPageProjectListItem;



export default ProductPage