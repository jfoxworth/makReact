
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import SideHeader from './SideHeader';
import DesignsWindow from './DesignsWindow';
import PriceWindow from './PriceWindow';
import TechWindow from './TechWindow';

// Models
import makDesign from '../../../src/types/makDesign';

interface propTypes {
  menuType: string,
  thisDesign: makDesign
  clickHandler : Function
}

const SideMenu:FC<propTypes> = ({menuType, thisDesign, clickHandler}:propTypes):ReactElement => {

  return(
    
    <StyledSideBox>
      <SideHeader text={menuType} clickHandler={clickHandler} />
      { menuType=='Designs' && <DesignsWindow clickHandler={()=>{}} /> }
      { menuType=='Price' && <PriceWindow clickHandler={()=>{}} thisDesign={thisDesign} /> }
      { menuType=='Tech Doc' && <TechWindow thisDesign={thisDesign} /> }
    </StyledSideBox>

    
  )

}

const StyledSideBox = styled.div`
  position:fixed;
  top:400px;
  right:75px;
  width:300px;
  border:1px solid #000;
  min-height:200px;
  background-color:#FFF;
`;

export default SideMenu