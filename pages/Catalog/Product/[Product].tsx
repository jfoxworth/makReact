
// Standard React items
import { FC, ReactElement} from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';

// Models
import makDesign from '../../../src/types/makDesign';
import makProject from '../../../src/types/makProject';

// Redux related items
import { selectDesigns } from '../../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../../src/redux/projects/projects.selectors';
import { useSelector } from 'react-redux';

// Components
import InfoPanel from './InfoPanel';
import ImagePanel from './ImagePanel';
import InfoCat from './InfoCat';
import InfoTitle from './InfoTitle';
import BackNav from './BackNav';
import InfoDesc from './InfoDesc';
import Price from './Price';
import Button from './Button';
import ListSection from './ListSection';
import ListTitle from './ListTitle';
import List from './List';
import ListItem from './ListItem';

const Product:FC = ():ReactElement => {

  // Pull the product ID from the URL
  const router = useRouter()
  const { Product } = router.query;

  // Get the designs from the store and grab the one with this ID
  const designs = useSelector(selectDesigns);
  const thisDesign = designs.designs.filter((design:makDesign)=>design.id==Product)[0];

  const projects = useSelector(selectProjects);
  const myProjects = projects.projects.filter((project:makProject)=>project.designId==thisDesign.id);

  return(
    
    <>
      { thisDesign &&
        <StyledPanel>
          <InfoPanel>
            <BackNav backUrl={'/Catalog'} />
            <InfoTitle text={thisDesign.title} />
            <InfoCat text={thisDesign.category} />
            <InfoDesc text={thisDesign.description} />
            <Price text={thisDesign.initialPrice} />
            <Button text={"Create Project With This Design"} color={'green'} icon={'PlusSquare'} />
            <Button text={"Open in design Studio"} color={'red'}  icon={'Cubes'} />
            <Button text={"View brochure for this item"} color={'black'} icon={'Book'} />
              <ListSection >
                <ListTitle />
                <List >
                  { 
                    myProjects.map((project:makProject, index:number)=>(
                      <ListItem project={project} key={`projectitem${index}`} />
                    ))
                  }
                </List >
              </ListSection>
          </InfoPanel>
          <ImagePanel design={thisDesign} />
        </StyledPanel>
      }
    </>


  )

}


const StyledPanel = styled.div`
  background:#FFFFFF;
  padding:0 1em;
`;


export default Product