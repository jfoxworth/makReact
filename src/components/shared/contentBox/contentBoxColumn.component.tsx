

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


