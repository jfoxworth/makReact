
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