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
*/


// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


type propItems = {
  text:string,
  percent:number
}


const ListHeaderName = ({text, percent}:propItems):ReactElement => (
  
  <StyledHeaderName percent={percent}>
    {text}
  </StyledHeaderName>
)

interface IProps {
  percent:number;
}

const StyledHeaderName = styled.div<IProps>`
  font-weight:bold;
  ${css`
    width: ${(props:IProps)=>props.percent+'%'};
  `}
  display:inline-block;
  text-align:center;
`;

export default ListHeaderName

