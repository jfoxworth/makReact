
// Standard React items
import { ReactElement} from 'react';
import FaIcon from '../../shared/faIcons/faIcon.component';
import styled from 'styled-components';

const ProductPageButton = ({icon, text, color}:{icon:string, text:string, color:string}):ReactElement => {


  return(
    <StyledSection >
    
        <StyledButton><FaIcon icon={icon} /> {text}</StyledButton>
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
  background: ${(...props) => props.color };
  color: ${props => props.color == "blue" ? "#ffffff" : props.color == "green" ? "#ffffff" : props.color == "red" ? "#ffffff" : "#ACACAC" };
  `;

export default ProductPageButton