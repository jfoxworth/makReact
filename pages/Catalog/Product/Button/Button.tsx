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

interface propTypes {
  icon:string,
  text:string,
  clickHandler: Function
}

const ProductPageButton = ({icon, text, clickHandler}:propTypes):ReactElement => {

  return(
    <StyledSection >
      <StyledButton className="button is-info" onClick={()=>clickHandler()}>
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