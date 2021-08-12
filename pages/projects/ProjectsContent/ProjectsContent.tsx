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
import { FC, ReactElement } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectProjects } from '../../../src/redux/projects/projects.selectors';
import { selectDesigns } from '../../../src/redux/designs/designs.selectors';

// Types
import makProject from '../../../src/types/makProject';
import makDesign from '../../../src/types/makDesign';

// Components
import ProductListItem from './ProductListItem/ProductListItem';


const ProjectsContents:FC = ():ReactElement => {

  const projects=useSelector(selectProjects);
  const designs=useSelector(selectDesigns);

  return(

    <>

      { (projects.isFetching || designs.isFetching) && 
        <div>Loading</div>
      }

      {

        !projects.isFetching && !designs.isFetching &&

        <>
          <ul>
            {
              projects.projects.map((project:makProject, projectIndex:number)=>(
                <ProductListItem key={`projectsList${project.id}`} >
                  <ProductListItem.ProductListImage thisProject={project} 
                                                    thisDesign={designs.designs.filter((design:makDesign)=>design.id==project.designId)[0]} />
                  <ProductListItem.ProductListMainSection >
                    <ProductListItem.ProductListTitle thisProject={project} />
                    <ProductListItem.ProductListType thisProject={project}
                                                     thisDesign={designs.designs.filter((design:makDesign)=>design.id==project.designId)[0]} />
                    <ProductListItem.ProductListDate thisProject={project} />
                  </ProductListItem.ProductListMainSection>
                  <ProductListItem.ProductListStudioButton />
                  <ProductListItem.ProductListDescription project={project}/>
                </ProductListItem>
              ))
            }
          </ul>
        </>

      }

    </>

  )
}

export default ProjectsContents
