
// Standard React items
import {useEffect, FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import FaIcon from '../../../../src/components/FaIcon';

interface typeProps {
  text:string|number;
  clickHandler:Function;
}

const SideHeader:FC<typeProps> = ({text, clickHandler}:typeProps):ReactElement => {


  return(
    
    <StyledHeader>
      {text}
      <StyledClose onClick={()=>clickHandler('')}><FaIcon icon={'Close'} /></StyledClose>
    </StyledHeader>

    
  )

}

const StyledHeader = styled.div`
  background-color:#CCCCCC;
  color:#000;
  text-align:center;
  width:100%;
  padding:10px 0px;
  border-bottom:1px solid #000;
  font-weight:bold;
  letter-spacing:1px;
`;

const StyledClose = styled.div`
  position:absolute;
  right:0px;
  top:-2px;
  font-size:1.3em;
  cursor:pointer;
`;

export default SideHeader