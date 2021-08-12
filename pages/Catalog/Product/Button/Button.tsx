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

// Components
import FaIcon from '../../../../src/components/FaIcon/FaIcon';


const ProductPageButton = ({icon, text, color}:{icon:string, text:string, color:string}):ReactElement => {

  return(
    <StyledSection >
      <StyledButton className="button is-info">
        <span className="icon">
          <FaIcon icon={icon} />
        </span>
        <span>{text}</span>
      </StyledButton>
    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:15px;
  display:flex;
  align-items:baseline;
  justify-content:flex-start;`;

const StyledButton = styled.button`
  margin:auto;
  width:100%;
  `;

export default ProductPageButton