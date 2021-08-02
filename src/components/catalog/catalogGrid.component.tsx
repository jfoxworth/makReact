/*
*
*   This the code that puts out the list of designs
*
*/ 

// Standard React items
import {FC, ReactElement } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectDesigns } from '../../redux/designs/designs.selectors';

// Required components
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
