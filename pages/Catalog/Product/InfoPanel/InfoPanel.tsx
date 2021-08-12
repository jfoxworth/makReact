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
      <StyledInnerPanel>
        <StyledPanelBody>
          {children} 
        </StyledPanelBody>
      </StyledInnerPanel>
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
  padding:4em 3em;
`;


export default ProductPageInfoPanel