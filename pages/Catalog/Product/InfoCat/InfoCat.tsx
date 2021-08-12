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


const ProductPageInfoCat = ({text}:{text:string}):ReactElement => {


  return(
    <StyledSpan>
      {text}
    </StyledSpan>
  )
}

const StyledSpan = styled.div`
  font-style:inherit;
  font-weight:inherit;
  color:#acacac;
  font-style:italic;
`;


export default ProductPageInfoCat