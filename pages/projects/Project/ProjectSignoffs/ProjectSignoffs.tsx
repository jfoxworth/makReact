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


const ProjectSignoffs:FC<propType> = ():ReactElement => {

  const dispatch = useDispatch();

  let signoffData = useSelector(selectSignoffs);
  let userdataObject = useSelector(selectUserdata);

  


  return(
    
      <div className="column is-12">
        {
          <ContentBox>
            <ContentBoxHeader title={"Signoffs for this Project"} editable={false} handleEditClick={()=>{}}/>
            <ContentBoxContent>
            <>
              </>


              <>
              </>

            </ContentBoxContent>
          </ContentBox>
        }
      </div>

  )

}

export default ProjectSignoffs
