
// Standard React items
import { FC, ReactElement} from 'react';


// Other components
import HeaderTitle from '../../src/components/HeaderTitle';
import ProjectsContents from './ProjectsContent/ProjectsContent';

const Projects:FC = ():ReactElement => {


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