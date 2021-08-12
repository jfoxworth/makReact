
// Standard React items
import {useEffect, FC, ReactElement} from 'react';


// Redux related items
import { useDispatch } from 'react-redux';


// Other components
import CatalogGrid from './CatalogGrid/CatalogGrid';
import HeaderTitle from '../../src/components/HeaderTitle';


const Catalog:FC = ():ReactElement => {


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"CATALOG"} />

        <CatalogGrid />

      </div>

    </div>
    
  )

}



export default Catalog