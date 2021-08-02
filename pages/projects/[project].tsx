
// Standard React items
import { FC, ReactElement, useEffect} from 'react';
import { useRouter } from 'next/router'
import makDesign from '../../src/types/makDesign';
import makProject from '../../src/types/makProject';


// Redux related items
import { selectDesigns } from '../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { useSelector } from 'react-redux';

// Components
import ProductPage from '../../src/components/catalog/Product/productPage.component';

const Product:FC<any> = ():ReactElement => {

  let projects:any=[];
  let designs:any=[];

  let thisProject:makProject;
  let thisDesign:makDesign;

  // Pull the product ID from the URL
  const router = useRouter()
  const { project } = router.query;

  // Pull the project from the array
  async function SelectItems(){
    projects = useSelector(selectProjects);
    designs = useSelector(selectDesigns);
    thisProject = await projects.projects.filter((tempProject:makProject)=>tempProject.id==project)[0]; 
    thisDesign = await designs.designs.filter((design:makDesign)=>design.id==thisProject.designId)[0];
  }

  SelectItems();
  


  return(
    
    <>
    </>
    

    


  )

}



export default Product