/*
*
*   
*
*/ 

// Standard React items
import { FC, ReactElement } from 'react';


// Models
import makProject from '../../../types/makProject';
import makDesign from '../../../types/makDesign';
import makVersion from '../../../../src/types/makVersion';


// Redux Items
import { useSelector } from 'react-redux';
import { selectVersions } from '../../../redux/versions/versions.selectors';


// Components
import ProjectNameDesc from './projectNameDesc.component';
import ProjectVersionData from './projectVersionData.component';


const ProjectContents:FC<any> = ({thisProject, thisDesign}:{thisProject:makProject, thisDesign:makDesign}):ReactElement => {

  const myVersions = useSelector(selectVersions);
  let theseVersions = myVersions.versions.filter((thisVer:makVersion)=>(thisVer.projectId==thisProject.id));

  return(

    <>
      { thisProject && <ProjectNameDesc thisProject={thisProject} /> }
      { theseVersions.length>0 && <ProjectVersionData thisProject={thisProject} versions={theseVersions}  /> }
    </>

  )
}

export default ProjectContents
