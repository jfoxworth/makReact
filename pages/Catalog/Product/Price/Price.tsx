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


const ProductPagePrice = ({text}:{text:string}):ReactElement => {


  return(
    <StyledSection >

      <StyledHeading>Initial Price</StyledHeading>
      <StyledValue>${text}</StyledValue>                

    </StyledSection>
  )
}


const StyledSection = styled.div`
  display:inline-flex;
  align-items:center;
  margin:25px auto`;

const StyledHeading = styled.div`
  display:block;
  font-size:0.75rem;
  letter-spacing:1px;
  margin-bottom:5px;
  text-transform:uppercase;
  margin:0px 15px`;

const StyledValue = styled.div`
  font-size:1.6rem;
  font-weight:700;`;

export default ProductPagePrice