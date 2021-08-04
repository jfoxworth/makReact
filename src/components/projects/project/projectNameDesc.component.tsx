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

// Models
import makProject from '../../../../src/types/makProject';

// Components
import ContentBox from '../../../../src/components/shared/contentBox/contentBox.component';
import ContentBoxContent from '../../../../src/components/shared/contentBox/contentBoxContent.component';
import ContentBoxColumn from '../../../../src/components/shared/contentBox/contentBoxColumn.component';
import ContentBoxHeader from '../../../../src/components/shared/contentBox/contentBoxHeader.component';


const ProjectNameDesc:FC<any> = ({thisProject}:{thisProject:makProject}):ReactElement => {

  const [myName, setMyName] = useState(thisProject.name+'');
  const [myDesc, setMyDesc] = useState(thisProject.description);

  const handleNameChange = (event:SyntheticEvent)=>{
    setMyName((event.target as HTMLInputElement).value);
  }

  const handleDescChange = (event:SyntheticEvent<HTMLInputElement>)=>{
    setMyDesc((event.target as HTMLInputElement).value);
  }


  return(
    
      <div className="column is-12">
        <ContentBox>
          <ContentBoxHeader title={"Project Details"} editable={false} handleEditClick={()=>{}}/>
          <ContentBoxContent>
            <ContentBoxColumn width={'12'}>

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
            <></>
          </ContentBoxContent>
        </ContentBox>
      </div>

  )

}

export default ProjectNameDesc