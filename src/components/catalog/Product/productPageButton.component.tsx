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
import FaIcon from '../../shared/faIcons/faIcon.component';


const ProductPageButton = ({icon, text, color}:{icon:string, text:string, color:string}):ReactElement => {

  return(
    <StyledSection >
        <StyledButton color={color}><FaIcon icon={icon} /></StyledButton>
        {text}
    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:15px;
  display:flex;
  align-items:baseline;
  justify-content:flex-start;`;

const StyledButton = styled.button`
  outline:none;
  cursor:pointer;
  background: ${props => props.color };
  outline:none;
  border:none;
  border-radius:5px;
  padding:10px;
  color:#FFFFFF;
  margin:0px 10px 0px 0px;
  `;

export default ProductPageButton