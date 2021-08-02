/*
*
*   
*
*/ 

// Standard React items
import { FC, ReactElement } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectProjects } from '../../redux/projects/projects.selectors';

// Types
import makProject from '../../types/makProject';

// Components
import ProductListItem from '../shared/productListItem/productListItem.component';


const ProjectsContents:FC<any> = ():ReactElement => {

  const projects=useSelector(selectProjects);

  

  return(

    <>

      { projects.isFetching && 
        <div>Loading</div>
      }

      {

        !projects.isFetching &&

        <>
          <ul>
            {
              projects.projects.map((project:makProject, projectIndex:number)=>(
                <ProductListItem key={`projectsList${project.id}`} >
                  <ProductListItem.ProductListImage />
                  <ProductListItem.ProductListMainSection >
                    <ProductListItem.ProductListTitle title={project.name} />
                    <ProductListItem.ProductListType type={project.designType} />
                    <ProductListItem.ProductListPrice />
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
