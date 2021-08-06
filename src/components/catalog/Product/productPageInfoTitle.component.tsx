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


const ProductPageInfoTitle = ({text}:{text:string}):ReactElement => {


  return(
    <StyledTitle>
      {text} 
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  font-family:"Raleway", sans-serif;
  text-transform:uppercase;
  font-size:2.2rem;
  font-weight:500;
  color:#4a4a4a;
`;

export default ProductPageInfoTitle