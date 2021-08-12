/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
*/

// Standard React items
import { ReactElement } from 'react';
import styled from 'styled-components';

interface propType {
  children:ReactElement[] | ReactElement
}

const ImageWrapper = ({children}:propType):ReactElement => (

  <StyledWrapper>
    { children }
  </StyledWrapper>

)

const StyledWrapper = styled.div`
  position:relative;
`;

export default ImageWrapper
