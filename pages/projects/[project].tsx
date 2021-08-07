
// Standard React items
import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';


// Models
import makDesign from '../../src/types/makDesign';
import makProject from '../../src/types/makProject';


// Redux related items
import { selectDesigns } from '../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSignoffReqsStart } from '../../src/redux/signoffReqs/signoffReqs.actions';


// Components
import HeaderTitle from '../../src/components/shared/HeaderTitle/HeaderTitle.component';
import ProjectContents from '../../src/components/projects/project/projectContent.component';


const Project:FC = ():ReactElement => {

  let dispatch=useDispatch();

  let projects:makProject[]={} as makProject[];
  let designs:makDesign[]={} as makDesign[];

  let thisProject:makProject={} as makProject;
  let thisDesign:makDesign={} as makDesign;

  // Pull the product ID from the URL
  const router = useRouter()
  const { project } = router.query;

  let projectData = useSelector(selectProjects);
  let designData = useSelector(selectDesigns);

  projects = projectData.projects;
  designs = designData.designs;

  if (projects.length>0 && designs.length>0)
  {
    thisProject = projects.filter((tempProject:makProject)=>tempProject.id==project)[0];
    thisDesign = designs.filter((design:makDesign)=>design.id==thisProject.designId)[0];
    dispatch(fetchSignoffReqsStart(project.toString()));
  } 

  return(
    
    <>
      { thisProject.id &&
        <HeaderTitle text={`PROJECT - ${thisProject.name}`} />
      }

      { thisProject.id &&
        <ProjectContents thisProject={thisProject} thisDesign={thisDesign}  />    
      }
      
    </>
    

    


  )

}



export default Project