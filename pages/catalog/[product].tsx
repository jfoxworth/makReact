
// Standard React items
import { FC, ReactElement} from 'react';
import { useRouter } from 'next/router'
import makDesign from '../../src/types/makDesign';
import makProject from '../../src/types/makProject';


// Redux related items
import { selectDesigns } from '../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { useSelector } from 'react-redux';

// Components
import ProductPage from '../../src/components/catalog/Product/productPage.component';

const Product:FC = ():ReactElement => {

  // Pull the product ID from the URL
  const router = useRouter()
  const { product } = router.query;

  // Get the designs from the store and grab the one with this ID
  const designs = useSelector(selectDesigns);
  const thisDesign = designs.designs.filter((design:makDesign)=>design.id==product)[0];

  const projects = useSelector(selectProjects);
  const myProjects = projects.projects.filter((project:makProject)=>project.designId==thisDesign.id);

  return(
    
    <>
      { thisDesign &&
        <ProductPage >
          <ProductPage.ProductPageInfoPanel>
            <ProductPage.ProductPageBack backUrl={'/catalog'} />
            <ProductPage.ProductPageInfoTitle text={thisDesign.title} />
            <ProductPage.ProductPageInfoCat text={thisDesign.category} />
            <ProductPage.ProductPageInfoDesc text={thisDesign.description} />
            <ProductPage.ProductPagePrice text={thisDesign.initialPrice} />
            <ProductPage.ProductPageButton text={"Create Project With This Design"} color={'green'} icon={'PlusSquare'} />
            <ProductPage.ProductPageButton text={"Open in design Studio"} color={'red'}  icon={'Cubes'} />
            <ProductPage.ProductPageButton text={"View brochure for this item"} color={'black'} icon={'Book'} />
              <ProductPage.ProductPageProjectListSection >
                <ProductPage.ProductPageProjectListTitle />
                <ProductPage.ProductPageProjectList >
                { 
                  myProjects.map((project:makProject, index:number)=>(
                    <ProductPage.ProductPageProjectListItem project={project}
                                                            key={`projectitem${index}`} />
                  ))
                }
                </ProductPage.ProductPageProjectList >
              </ProductPage.ProductPageProjectListSection>
          </ProductPage.ProductPageInfoPanel>
          <ProductPage.ProductPageImagePanel design={thisDesign} />
        </ProductPage>


      }
    </>
    


  )

}



export default Product