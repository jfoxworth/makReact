
// Standard React items
import { FC, ReactElement} from 'react';


// Redux related items
import { useSelector } from 'react-redux';
import { selectUser } from '../src/redux/user/user.selector';


// Other components
import ProfileContents from '../src/components/profile/profileContents.component';
import HeaderTitle from '../src/components/shared/HeaderTitle/HeaderTitle.component';


const Profile:FC<any> = ():ReactElement => {

  const user = useSelector(selectUser);


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"PROFILE"} />

        <ProfileContents />

      </div>

    </div>
    
  )

}



export default Profile