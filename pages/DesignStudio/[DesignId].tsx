
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
  const [title, setTitle] = useState('');

  const handleMenu = (type:string, title:string) => {
    setMenuType(type);
    setTitle(title);
  }

  return(
    
    <>
      <HexMenu type={'Design'} thisDesign={thisDesign} clickHandler={handleMenu} />

      {
        menuType!==null && thisDesign &&
        <SideMenu menuType={menuType} title={title} thisDesign={thisDesign} clickHandler={handleMenu} />
      }
    </>
    
  )

}



export default DesignId