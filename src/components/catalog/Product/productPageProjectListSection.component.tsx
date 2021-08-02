
// Standard React items
import { ReactElement} from 'react';
import styled from 'styled-components';



const ProductPageProjectListSection = ({children}:{children:ReactElement[]}):ReactElement => {


  return(
    <StyledSection >
        {children}
    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:20px;
  width:100%;
  display:block;
  align-items:baseline;
  justify-content:flex-start;`;


export default ProductPageProjectListSection