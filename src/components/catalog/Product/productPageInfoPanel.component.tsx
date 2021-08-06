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
import styled from 'styled-components';


type propItems = {
  children:ReactElement[]
}


const ProductPageInfoPanel = ({children}:propItems):ReactElement => {


  return(
    <StyledInfoPanel>
    <div className="product-info-panel">
      <StyledInnerPanel>
      <div className="inner-panel">
        <StyledPanelBody>
        <div className="panel-body">
          {children} 
        </div>
        </StyledPanelBody>
      </div>
      </StyledInnerPanel>
    </div>
    </StyledInfoPanel>
  )
}


const StyledInfoPanel = styled.div`
  width:50%;
  z-index:1;
  vertical-align:top;
  display:inline-block;
`;

const StyledInnerPanel = styled.div`
  height:100%;
`;

const StyledPanelBody = styled.div`
  padding:60px 80px;
`;


export default ProductPageInfoPanel