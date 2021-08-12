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


const ProductPageProjectListTitle = ():ReactElement => {


  return(
    <StyledTitle className={"title is-4"}>
        My projects with this design 
    </StyledTitle>
  )
}


const StyledTitle = styled.div`
  padding-top:30px;
  text-align:center;
`;


export default ProductPageProjectListTitle