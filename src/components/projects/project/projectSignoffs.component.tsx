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
import { FC, ReactElement, SyntheticEvent, useState } from 'react';

// React redux items
import { useDispatch } from 'react-redux';
import { projectsUpdateStart } from '../../../redux/projects/projects.actions';

// Models
import makProject from '../../../../src/types/makProject';
import makDesign from '../../../types/makDesign';

// Hooks
import useFirestoreImage from '../../shared/hooks/useFirestoreImage';
import useTimeDate from '../../shared/hooks/useTimeDate';

// Components
import ContentBox from '../../../../src/components/shared/contentBox/contentBox.component';
import ContentBoxContent from '../../../../src/components/shared/contentBox/contentBoxContent.component';
import ContentBoxColumn from '../../../../src/components/shared/contentBox/contentBoxColumn.component';
import ContentBoxHeader from '../../../../src/components/shared/contentBox/contentBoxHeader.component';
import Image from 'next/image';
import ImageWrapper from '../../shared/ImageWrapper/ImageWrapper.component';

// Styles
import styles from '../../../../styles/styles.module.css';

interface propType {
  thisProject:makProject
}


const ProjectSignoff:FC<propType> = ({thisProject}:propType):ReactElement => {

  return(
    
      <div className="column is-12">
        <ContentBox>
          <ContentBoxHeader title={"Feedback Signoffs"} editable={false} handleEditClick={()=>{}}/>
          <ContentBoxContent>
            <></>
            <ContentBoxColumn width={'6'}>

            </ContentBoxColumn>
          </ContentBoxContent>
        </ContentBox>
      </div>

  )

}

export default ProjectSignoff