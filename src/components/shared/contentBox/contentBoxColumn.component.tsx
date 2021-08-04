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
import styled, { css } from 'styled-components';


type propItems = {
  width:string,
  children:ReactElement[] | ReactElement
}

const ContentBoxColumn = ({ width, children }:propItems):ReactElement => (
  
  <StyledBoxColumn className={`column is-${width}`} style={{'display':'inline-block'}}>
    {children}
  </StyledBoxColumn>

)


const StyledBoxColumn = styled.div`
display:inline-block;
margin:20px auto;
vertical-align:top;
`



export default ContentBoxColumn


