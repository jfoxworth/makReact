
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import SideHeader from './SideHeader';
import DesignsWindow from './DesignsWindow';
import PriceWindow from './PriceWindow';
import TechWindow from './TechWindow';
import SettingsWindow from './SettingsWindow';

// Models
import makDesign from '../../../src/types/makDesign';

interface propTypes {
  menuType: string|number,
  thisDesign: makDesign,
  title:string,
  clickHandler : Function
}

const SideMenu:FC<propTypes> = ({menuType, title, thisDesign, clickHandler}:propTypes):ReactElement => {

  return(
    
    <StyledSideBox><div>
      <SideHeader text={title} clickHandler={clickHandler} />
      { menuType=='designs' && <DesignsWindow clickHandler={()=>{}} /> }
      { menuType=='price' && <PriceWindow clickHandler={()=>{}} thisDesign={thisDesign} /> }
      { menuType=='docs' && <TechWindow thisDesign={thisDesign} /> }
      { typeof(menuType)=='number' && <SettingsWindow thisDesign={thisDesign} thisMenu={thisDesign.parameterMenus[menuType]} /> }
    </div></StyledSideBox>

  )

}

const StyledSideBox = styled.div`
  position:fixed;
  top:300px;
  right:75px;
  width:300px;
  border:1px solid #000;
  min-height:200px;
  background-color:#FFF;
`;

export default SideMenu