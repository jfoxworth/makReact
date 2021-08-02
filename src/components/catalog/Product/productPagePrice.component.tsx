
// Standard React items
import { ReactElement} from 'react';
import styled from 'styled-components';



const ProductPagePrice = ({text}:{text:string}):ReactElement => {


  return(
    <StyledSection >
      <div className="product-controls">

        <StyledRelative>
          <div>
            <StyledHeading>
              <div>Initial Price</div>
            </StyledHeading>
          </div>
        </StyledRelative>

        <StyledRelative>
          <div>
            <StyledValue>
              <div>${text}</div>
            </StyledValue>                
          </div>
        </StyledRelative>
        </div>

    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:20px;
  display:flex;
  align-items:baseline;
  justify-content:flex-start`;

const StyledRelative = styled.div`
  position:relative;
  display:block`;

const StyledHeading = styled.div`
  display:block;
  font-size:0.75rem;
  letter-spacing:1px;
  margin-bottom:5px;
  text-transform:uppercase;
  margin:0px 15px`;

const StyledValue = styled.div`
  font-size:1.6rem;
  font-weight:700;
  color:#0023ff;`;

export default ProductPagePrice