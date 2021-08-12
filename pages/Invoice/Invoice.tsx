
// Standard React items
import { FC, ReactElement} from 'react';


// Redux related items
import { useSelector } from 'react-redux';
import { selectUser } from '../../src/redux/user/user.selector';


// Other components
import HeaderTitle from '../../src/components/HeaderTitle';


const Invoice:FC = ():ReactElement => {

  const user = useSelector(selectUser);


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"Invoice"} />

        <p>If you arrive here, you should have had an invoice ID number at the end of the URL.</p>


      </div>

    </div>
    
  )

}



export default Invoice