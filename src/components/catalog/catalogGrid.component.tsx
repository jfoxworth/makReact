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
import {FC, ReactElement } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectDesigns } from '../../redux/designs/designs.selectors';

// Components
import CatalogTile from './catalogTile.component';


const CatalogGrid:FC<any> = ():ReactElement => {

  const designs = useSelector(selectDesigns);

  return(

    <div className="is-categories-grid is-ancestor is-12">

      {
        designs.designs.map((design:any, index:number)=>(
          <CatalogTile design={design} key={`catalogItem${index}`}/>
        ))
      }

  </div>

 
  )
}

export default CatalogGrid
