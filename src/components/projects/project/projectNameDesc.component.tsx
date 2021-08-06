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

// Components
import ContentBox from '../../../../src/components/shared/contentBox/contentBox.component';
import ContentBoxContent from '../../../../src/components/shared/contentBox/contentBoxContent.component';
import ContentBoxColumn from '../../../../src/components/shared/contentBox/contentBoxColumn.component';
import ContentBoxHeader from '../../../../src/components/shared/contentBox/contentBoxHeader.component';
import Image from 'next/image';
import ImageWrapper from '../../shared/ImageWrapper/ImageWrapper.component';

interface propType {
  thisProject:makProject,
  thisDesign:makDesign
}


const ProjectNameDesc:FC<propType> = ({thisProject, thisDesign}:propType):ReactElement => {

  const [myName, setMyName] = useState(thisProject.name+'');
  const [myDesc, setMyDesc] = useState(thisProject.description);
  const dispatch = useDispatch();

  const handleNameChange = (event:SyntheticEvent)=>{
    let newName=(event.target as HTMLInputElement).value
    setMyName(newName);
    dispatch(projectsUpdateStart({...thisProject, name:newName }));
  }

  const handleDescChange = (event:SyntheticEvent<HTMLInputElement>)=>{
    setMyDesc((event.target as HTMLInputElement).value);
    dispatch(projectsUpdateStart({...thisProject, description:myDesc}));
  }

  const designImage = useFirestoreImage(thisDesign.marketplace.images.filter((image:any)=>image.mainImage)[0].path);

  return(
    
      <div className="column is-12">
        <ContentBox>
          <ContentBoxHeader title={"Project Details"} editable={false} handleEditClick={()=>{}}/>
          <ContentBoxContent>
            <ContentBoxColumn width={'6'}>

              <ContentBox.ContentBoxItem name={'Name of the project'} 
                                         text={myName} 
                                         icon={'Cog'}
                                         editable={true} 
                                         editStatus={true} 
                                         handleChange={handleNameChange} />

              <ContentBox.ContentBoxItem name={'Description of the project'} 
                                         text={myDesc} 
                                         icon={'Laptop'}
                                         editable={true} 
                                         editStatus={true} 
                                         handleChange={handleDescChange} />
            </ContentBoxColumn>
            <ContentBoxColumn width={'6'}>

              <>
              { designImage && 
                <ImageWrapper>
                  <Image src={designImage} layout={"fill"} objectFit={"contain"}  alt="Design Image" />
                </ImageWrapper>
              }
              </>

              <ContentBox.ContentBoxItem name={'Description of the project'} 
                                         text={myDesc} 
                                         icon={'Laptop'}
                                         editable={true} 
                                         editStatus={true} 
                                         handleChange={handleDescChange} />
            </ContentBoxColumn>
          </ContentBoxContent>
        </ContentBox>
      </div>

  )

}

export default ProjectNameDesc