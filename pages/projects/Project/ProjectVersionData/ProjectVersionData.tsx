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
import { FC, ReactElement, useState } from 'react';

// Redux stuff
import { versionUpdateStart } from '../../../../src/redux/versions/versions.actions';
import { useDispatch } from 'react-redux';

// Models
import makProject from '../../../../src/types/makProject';
import makVersion from '../../../../src/types/makVersion';
import makOrder from '../../../../src/types/makOrder';

// Components
import ProjectVersionListItem from '../ProjectVersionListItem/ProjectVersionListItem';
import ContentBox from '../../../../src/components/ContentBox';
import ContentBoxContent from '../../../../src/components/ContentBox/ContentBoxContent';
import ContentBoxColumn from '../../../../src/components/ContentBox/ContentBoxColumn';
import ContentBoxHeader from '../../../../src/components/ContentBox/ContentBoxHeader';
import ProjectVersionMeasurements from '../ProjectVersionMeasurements';


type propItems = {
  thisOrder:makOrder
  thisProject:makProject,
  versions:makVersion[]
}

const ProjectVersionData:FC<propItems> = ({thisOrder, thisProject, versions}:propItems):ReactElement => {

  const dispatch = useDispatch();
  const [vName, setVName]=useState(versions[0]['name']);
  const [vDesc, setVDesc]=useState(versions[0]['description']);

  const [selectedVersion, setSelectedVersion]=useState(versions[0]);

  // Handles when a user clicks on a version
  const handleVersionClick = (versionId:string) =>{
    let tempVersion = versions.filter((ver:makVersion)=>(ver.id==versionId))[0];
    setSelectedVersion(tempVersion);
    setVName(tempVersion.name);
    setVDesc(tempVersion.description);
  }

  // Handles when a user changes an input box
  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setVName(event.target.value); 
    dispatch(versionUpdateStart({...selectedVersion, name:event.target.value }));
  }

  const handleDescChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setVDesc(event.target.value); 
    dispatch(versionUpdateStart({...selectedVersion, description:event.target.value }));
  }

  

  return(
        
    <div className="column is-12">
      <ContentBox>
        <ContentBoxHeader title={"Version Details"} editable={false} handleEditClick={()=>{}}/>
        <ContentBoxContent>
          <ContentBoxColumn width={'12'}>

            <>
            { versions.map((tV:makVersion, index:number)=>(
                <ProjectVersionListItem thisOrder={thisOrder}
                                        thisVersion={tV} 
                                        selectedVersionId={selectedVersion.id}
                                        key={`Version${index}`}
                                        handleVersionClick={handleVersionClick} />
              ))  
            }
            </>
            
            <ContentBoxColumn width={'6'}>
              <ContentBox.ContentBoxItem name={'Version Name'} 
                                         id={'name'} 
                                         icon={'Cog'} 
                                         text={vName} 
                                         editable={true} 
                                         editStatus={true} 
                                         handleChange={handleNameChange} />

              <ContentBox.ContentBoxItem name={'Description'} 
                                         id={'description'} 
                                         icon={'Book'} 
                                         text={vDesc} 
                                         editable={true} 
                                         editStatus={true} 
                                         handleChange={handleDescChange} />

            </ContentBoxColumn>

            <ContentBoxColumn width={'6'}>
              <ProjectVersionMeasurements measurements={selectedVersion.measurements} />
            </ContentBoxColumn>

          </ContentBoxColumn>
          <></>
        </ContentBoxContent>
      </ContentBox>
    </div>
  
  )

}

export default ProjectVersionData