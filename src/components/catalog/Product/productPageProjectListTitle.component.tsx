
// Standard React items
import { ReactElement} from 'react';
import styled from 'styled-components';


const ProductPageProjectListTitle = ():ReactElement => {


  return(
    <StyledTitle >
        My projects with this design 
    </StyledTitle>
  )
}


const StyledTitle = styled.div`
  padding-top:20px;
  padding-bottom:10px;
  display:flex;
  align-items:baseline;
  justify-content:flex-start;
  border-bottom:1px solid #ccc;
  width:100%;
  display:block`;


export default ProductPageProjectListTitle