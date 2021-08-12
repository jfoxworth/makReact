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
import { FC, ReactElement, useEffect } from 'react';

// React redux items
import { useSelector, useDispatch } from 'react-redux';
import { selectSignoffReqs } from '../../../../src/redux/signoffReqs/signoffReqs.selectors';
import { selectSignoffs } from '../../../../src/redux/signoffs/signoffs.selectors';
import { selectUserdata } from '../../../../src/redux/userdata/userdata.selectors';
import { fetchUserdataStart } from '../../../../src/redux/userdata/userdata.actions';

// Models
import UserData from '../../../../src/types/userData';
import signoffReq from '../../../../src/types/signoffReq';
import designSignoff from '../../../../src/types/designSignoff';

// Hooks
import useFirestoreImage from '../../../../src/components/Hooks/useFirestoreImage';
import useTimeDate from '../../../../src/components/Hooks/useTimeDate';

// Components
import ContentBox from '../../../../src/components/ContentBox/ContentBox';
import ContentBoxContent from '../../../../src/components/ContentBox/ContentBoxContent/ContentBoxContent';
import ContentBoxColumn from '../../../../src/components/ContentBox/ContentBoxColumn/ContentBoxColumn';
import ContentBoxHeader from '../../../../src/components/ContentBox/ContentBoxHeader/ContentBoxHeader';
import ListContent from '../../../../src/components/List/List';
import ListHeader from '../../../../src/components/List/ListHeader/ListHeader';
import ListHeaderName from '../../../../src/components/List/ListHeaderName/ListHeaderName';
import ListHeaderText from '../../../../src/components/List/ListHeaderText/ListHeaderText';
import ListLine from '../../../../src/components/List/ListLine/ListLine';
import ListName from '../../../../src/components/List/ListName/ListName';
import ListText from '../../../../src/components/List/ListText/ListText';
import ListImage from '../../../../src/components/List/ListImage/ListImage';
import ListIcon from '../../../../src/components/List/ListIcon/ListIcon';


interface propType {
}


const ProjectSignoffReqs:FC<propType> = ():ReactElement => {

  const dispatch = useDispatch();

  let signoffReqData = useSelector(selectSignoffReqs);
  let signoffData = useSelector(selectSignoffs);
  let userdataObject = useSelector(selectUserdata);

  
  // Grab user info so that we can get image type
  useEffect(()=>{
    signoffReqData.signoffReqs.forEach((signoffReq:signoffReq, index:number)=>{
      dispatch(fetchUserdataStart(signoffReq['userId']));
    });
  },[signoffReqData.signoffReqs, dispatch]);


  const getUserImageType = (userId:string)=>{
    let iT = 'png';
    userdataObject.userdata.forEach((user:UserData, index:number)=>{
      if ( user.uid == userId )
      {
        iT = user.imageType
      }
    });
    return iT
  }


  return(
    
      <div className="column is-12">
        {
          signoffReqData.signoffReqs &&
          userdataObject.userdata.length > 0 &&
          <ContentBox>
            <ContentBoxHeader title={"Users with Signoff Permission"} editable={false} handleEditClick={()=>{}}/>
            <ContentBoxContent>

              <ContentBoxColumn width={'6'}>
                <ListContent>
                  <p>It is often necessary for users to comment on or sign off on designs and project versions. 
                    The users to the right have permission to sign off on this project. You can add more users 
                    using the section below or remove them in the list to the right.</p>
                </ListContent>
              </ContentBoxColumn>


              <ContentBoxColumn width={'6'}>
                <ListContent>
                  <ListHeader percent={100}>
                    <ListHeaderName text={'List of Users'} percent={100} />
                  </ListHeader>
                  <>
                  {
                    signoffReqData.signoffReqs.map((signoffReq:signoffReq, index:number)=>(
                      <ListLine percent={100} height={'50px'} key={`signoffreq${index}`} >
                        <ListImage percent={30} height={'50px'} imageURL={`/profile/${signoffReq.userId}.${getUserImageType(signoffReq.userId)}`} ></ListImage>
                        <ListText text={signoffReq.userEmail} height={'50px'} percent={60} />
                        <ListIcon percent={10} height={'50px'} icon={'Trash'} />
                      </ListLine>
                    ))
                  }
                  </>
                </ListContent>
              </ContentBoxColumn>


            </ContentBoxContent>
          </ContentBox>
        }
      </div>

  )

}

export default ProjectSignoffReqs
