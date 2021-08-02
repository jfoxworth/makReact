
// Standard React items
import { ReactElement} from 'react';
import styled from 'styled-components';
import makProject from '../../../types/makProject';
import FaIcon from '../../shared/faIcons/faIcon.component';
import 'bulma-tooltip';
import Link from 'next/link';



const ProductPageProjectListItem = ({project}:{project:makProject}):ReactElement => {

  let monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ]
  let dateString = monthArray[new Date(project.dateCreated).getMonth()]+ ' '+
                   new Date(project.dateCreated).getDay()+', '+
                   new Date(project.dateCreated).getFullYear();

  return(
    <StyledSection >
      <StyledDate>{ dateString }</StyledDate>
      <StyledTitle>{ project.name }</StyledTitle>
      <Link href={`/projects/${project.id}`} passHref={true} >
        <StyledButton className={'has-tooltip-info has-tooltip-left'} 
                      data-tooltip="Open project details" >
          <FaIcon icon={'Tasks'} />
        </StyledButton>
      </Link>
      <Link href={`/designStudio/project/${project.id}`} passHref={true} >
        <StyledButton className={'has-tooltip-info has-tooltip-right'} 
                      data-tooltip="Open project in design studio" >
          <FaIcon icon={'Cubes'} />
        </StyledButton>
      </Link>
    </StyledSection>
  )
}


const StyledSection = styled.div`
  padding-top:10px;
  padding-bottom:10px;
  display:flex;
  border-bottom:1px solid #ccc;`;

const StyledDate = styled.div`
  color:#acacac;
  font-size:0.8em;
  display:flex;
  padding-top:3px;
  width:25%;`;

const StyledTitle = styled.div`
  display:flex;
  width:59%;`;

  const StyledButton = styled.div`
  display:flex-right;
  width:8%;
  cursor:pointer;
  text-align:center;`;

  export default ProductPageProjectListItem