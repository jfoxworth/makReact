
// Standard React items
import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';


// Models
import makDesign from '../../src/types/makDesign';
import makProject from '../../src/types/makProject';
import makVersion from '../../src/types/makVersion';
import makOrder from '../../src/types/makOrder';


// Redux related items
import { selectDesigns } from '../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { selectVersions } from '../../src/redux/versions/versions.selectors';
import { selectOrders } from '../../src/redux/orders/orders.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSignoffReqsStart } from '../../src/redux/signoffReqs/signoffReqs.actions';
import { fetchSignoffsStart } from '../../src/redux/signoffs/signoffs.actions';


// Components
import HeaderTitle from '../../src/components/HeaderTitle';
import ProjectNameDesc from './Project/ProjectNameDesc';
import ProjectVersionData from './Project/ProjectVersionData';
import ProjectSignoffReqs from './Project/ProjectSignoffReqs';
import ProjectSignoffs from './Project/ProjectSignoffs';


const Project:FC = ():ReactElement => {

  let dispatch=useDispatch();

  let projects:makProject[]={} as makProject[];
  let designs:makDesign[]={} as makDesign[];
  let orders:makOrder[]={} as makOrder[];

  let thisProject:makProject={} as makProject;
  let thisDesign:makDesign={} as makDesign;
  let theseVersions:makVersion[]={} as makVersion[];
  let myCart:makOrder={} as makOrder;

  // Pull the product ID from the URL
  const router = useRouter()
  const { Project } = router.query;

  let projectData = useSelector(selectProjects);
  let designData = useSelector(selectDesigns);
  let versionData = useSelector(selectVersions);
  let orderData = useSelector(selectOrders);

  projects = projectData.projects;
  designs = designData.designs;
  orders =  orderData.orders;

  if (projects.length>0 && designs.length>0 && orders.length)
  {
    thisProject = projects.filter((tempProject:makProject)=>tempProject.id==Project)[0];
    thisDesign = designs.filter((design:makDesign)=>design.id==thisProject.designId)[0];
    dispatch(fetchSignoffReqsStart(Project.toString()));
    dispatch(fetchSignoffsStart(Project.toString()));
    theseVersions = versionData.versions.filter((thisVer:makVersion)=>(thisVer.projectId==thisProject.id)).flat();
    myCart = orders.filter((order:makOrder)=>order.isCart)[0];
  } 

  return(
    
    <>
      { thisProject.id &&
        <HeaderTitle text={`PROJECT - ${thisProject.name}`} />
      }

      { thisProject && thisDesign.marketplace &&
        <ProjectNameDesc thisProject={thisProject} thisDesign={thisDesign} />
      }
      
      { theseVersions.length > 0 && theseVersions &&
        <ProjectVersionData thisOrder={myCart} thisProject={thisProject} versions={theseVersions}  /> 
      }

      { theseVersions.length > 0 && 
        <ProjectSignoffReqs /> 
      }

      { theseVersions.length > 0 && 
        <ProjectSignoffs /> 
      }
      
    </>
    

    


  )

}



export default Project