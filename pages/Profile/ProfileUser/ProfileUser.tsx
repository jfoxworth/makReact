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
import { FC, ReactElement } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectUser } from '../../../src/redux/user/user.selector';
import { selectProjects } from '../../../src/redux/projects/projects.selectors';

// Hooks
import useFirestoreImage from '../../../src/components/Hooks/useFirestoreImage';

// Components
import Image from 'next/image';


const ProfileUser:FC = ():ReactElement => {

  const user = useSelector(selectUser);
	const projects = useSelector(selectProjects);

  const imageString = useFirestoreImage(user.currentUser ? `/profile/${user.currentUser?.id}.${user.currentUser?.imageType}` : `/profile/default.jpeg`);


  return(


    <div className="flat-card profile-card is-auto">
			<div className="card-body">
				<div className="profile-image" style={{'margin':'auto', width:'80px' }}>
					<Image src={imageString ? imageString : '/defaultImage.png'} width="120px" height="40px" alt="Picture of the author" />
				</div>
				<div className="username has-text-centered">
					<span id="full-name">{user?.currentUser?.displayName}</span>
					<small id="full-email">{user?.currentUser?.email}</small>
				</div>
			</div>
			<div className="profile-footer has-text-centered">
				<span className="achievement-title">Number of Projects</span>
				<div className="count">
						{projects.projects.length}
				</div>
			</div>
    </div>

  )
}

export default ProfileUser
