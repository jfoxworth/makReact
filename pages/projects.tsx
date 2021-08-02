
// Standard React items
import { FC, ReactElement} from 'react';


// Redux related items
import { useSelector } from 'react-redux';
import { selectProjects } from '../src/redux/projects/projects.selectors';


// Other components
import HeaderTitle from '../src/components/shared/HeaderTitle/HeaderTitle.component';
import ProjectsContents from '../src/components/projects/projectContent.component';

const Projects:FC<any> = ():ReactElement => {


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"PROJECTS"} />

        <ProjectsContents />

      </div>

    </div>
    
  )

}



export default Projects