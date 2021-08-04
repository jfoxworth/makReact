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


const ProductPageProjectList = ({children}:{children:propItems}):ReactElement => {


  return(
    <StyledSection >
        {children}
    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:20px;
  width:100%;
  align-items:baseline;
  justify-content:flex-start`;


export default ProductPageProjectList