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
import { ReactElement } from 'react';
import styled, {css} from 'styled-components';

// Models 
import makProject from '../../../types/makProject';

// Hooks
import useTimeDate from '../hooks/useTimeDate';


interface propType {
  thisProject : makProject
}

const ProductListDate = ({thisProject}:propType):ReactElement => {

  const timeString = useTimeDate(thisProject.dateCreated, 'MonDY');

  return(
  
    <StyledTime className="product-description">
      {timeString}
    </StyledTime>
  )

}

const StyledTime = styled.div`
  color:#acacac;
  font-size:0.8em;
  `


export default ProductListDate


