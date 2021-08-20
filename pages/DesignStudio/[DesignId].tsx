/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*   This file is the top level component for a user viewing a design in the 3D studio.
*/

// Standard React items
import {FC, ReactElement, useState, useEffect} from 'react';
import { useRouter } from 'next/router';

// Models
import makDesign from '../../src/types/makDesign';

// Redux related items
import { useSelector } from 'react-redux';
import { selectDesigns } from '../../src/redux/designs/designs.selectors';

// Other components
import HexMenu from './HexMenu';
import SideMenu from './SideMenu';
import CanvasBase from './CanvasBase';

// Shapediver


const DesignId:FC = ():ReactElement => {

  // Pull the design ID from the URL
  const router = useRouter()
  const { DesignId } = router.query;
  let thisDesign = {} as makDesign;
  const designData = useSelector(selectDesigns);
  if ( designData.designs.length )
  {
    thisDesign = designData.designs.filter((design:makDesign)=>design.id==DesignId)[0];
  }

  const [menuType, setMenuType] = useState('');
  const [title, setTitle] = useState('');

  const handleMenu = (type:string, title:string) => {
    setMenuType(type);
    setTitle(title);
  }

  return(
    
    <>
      <HexMenu type={'Design'} thisDesign={thisDesign} clickHandler={handleMenu} />

      {
        menuType!=='' && thisDesign &&
        <SideMenu menuType={menuType} title={title} thisDesign={thisDesign} clickHandler={handleMenu} />
      }

      <CanvasBase />
    </>
    
  )

}



export default DesignId