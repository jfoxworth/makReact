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


const ProductPageInfoDesc = ({text}:{text:string}):ReactElement => {


  return(
    <StyledDesc>
         {text}
    </StyledDesc>
    )
}


const StyledDesc = styled.div`
  padding-top:20px;
  color:#999;
  display:block;
  margin-block-start:1em;
  margin-block-end:1em;
  margin-inline-start:0px;
  margin-inline-end:0px;
`;

export default ProductPageInfoDesc