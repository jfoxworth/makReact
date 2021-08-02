
// Standard React items
import {useEffect, FC, ReactElement} from 'react';


// Redux related items
import { useDispatch } from 'react-redux';
import { fetchDesignsStart } from '../src/redux/designs/designs.actions';


// Other components
import CatalogGrid from '../src/components/catalog/catalogGrid.component';
import HeaderTitle from '../src/components/shared/HeaderTitle/HeaderTitle.component';


const Catalog:FC<any> = ():ReactElement => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchDesignsStart());
  },[]);


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