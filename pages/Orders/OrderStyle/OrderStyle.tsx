
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import FaIcon from '../../../src/components/FaIcon';

interface propTypes {
  setView: Function;
}

const Orders:FC<propTypes> = ({setView}):ReactElement => {

  return(
    <StyledControls>
        <StyledIcon onClick={()=>setView('grid')}><h2><FaIcon icon={'ThLarge'} /></h2></StyledIcon>
        <StyledIcon onClick={()=>setView('list')}><h2><FaIcon icon={'ThList'} /></h2></StyledIcon>
    </StyledControls>    
  )

}

const StyledControls = styled.div`
  display:flex;
  margin:1em auto;
`;

const StyledIcon = styled.div`
  width:3em;
  cursor:pointer;
  display:inline;
  color:#CCC;
`;

export default Orders

