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
import { useRouter } from 'next/router'

// React redux items
import { useDispatch } from 'react-redux';
import { fetchProjectsStart, projectsUpdateStart } from '../../../../src/redux/projects/projects.actions';
import { versionUpdateStart } from '../../../../src/redux/versions/versions.actions';

// Models
import makProject from '../../../../src/types/makProject';
import makDesign from '../../../../src/types/makDesign';
import makVersion from '../../../../src/types/makVersion';

// Hooks
import useFirestoreImage from '../../../../src/components/Hooks/useFirestoreImage';
import useTimeDate from '../../../../src/components/Hooks/useTimeDate';

// Components
import ContentBox from '../../../../src/components/ContentBox/ContentBox';
import ContentBoxContent from '../../../../src/components/ContentBox/ContentBoxContent/ContentBoxContent';
import ContentBoxColumn from '../../../../src/components/ContentBox/ContentBoxColumn/ContentBoxColumn';
import ContentBoxHeader from '../../../../src/components/ContentBox/ContentBoxHeader/ContentBoxHeader';
import ContentBoxText from '../../../../src/components/ContentBox/ContentBoxText';
import Image from 'next/image';

// Styles
import styles from '../../../../styles/styles.module.css';

interface propType {
  thisProject:makProject,
  thisDesign:makDesign,
  theseVersions:makVersion[]
}


const ProjectNameDesc:FC<propType> = ({thisProject, thisDesign, theseVersions}:propType):ReactElement => {

  const [myName, setMyName] = useState(thisProject.name+'');
  const [myDesc, setMyDesc] = useState(thisProject.description);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const deleteProject = (thisProject:makProject, theseVersions:makVersion[]) => {
    dispatch(projectsUpdateStart({...thisProject, deleted:true}));
    dispatch(fetchProjectsStart());
    theseVersions.forEach((version:makVersion)=>{
      dispatch(versionUpdateStart({...version, deleted:true}));
    });
    router.push('/Projects');
  }

  return(
    
      <div className="column is-12">
        <ContentBox>
          <ContentBoxHeader title={"Project Details"} editable={false} handleEditClick={()=>{}}/>
          <ContentBoxContent>
            <ContentBoxColumn width={'6'}>

              <ContentBox.ContentBoxText text={`Date Project Created : ${useTimeDate(thisProject.dateCreated, '')}`} 
                                         icon={'Calendar'}/>

              <ContentBox.ContentBoxAction text={`Delete Project`} 
                                            icon={'Trash'}
                                            clickHandler={()=>deleteProject(thisProject, theseVersions)}/>

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
            <ContentBoxColumn width={'6'} className={styles.relDiv}>

              <>
              { designImage && 
                  <Image src={designImage} layout={"fill"} className={styles.absDiv} objectFit={"contain"}  alt="Design Image" />
              }
              </>
            </ContentBoxColumn>
          </ContentBoxContent>
        </ContentBox>
      </div>

  )

}

export default ProjectNameDesc