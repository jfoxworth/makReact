
// Standard React items
import {FC, ReactElement, useState} from 'react';
import { useRouter } from 'next/router';

// Models
import makDesign from '../../src/types/makDesign';

// Redux related items
import { useSelector } from 'react-redux';
import { selectDesigns } from '../../src/redux/designs/designs.selectors';

// Other components
import HexMenu from './HexMenu';
import SideMenu from './SideMenu';


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

  const handleMenu = (type:string) => {
    setMenuType(type);
  }

  return(
    
    <>
      <HexMenu type={'Design'} thisDesign={thisDesign} clickHandler={handleMenu} />

      {
        menuType && thisDesign &&
        <SideMenu menuType={menuType} thisDesign={thisDesign} clickHandler={handleMenu} />
      }
    </>
    
  )

}



export default DesignId