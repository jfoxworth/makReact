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


const ListName = ({text, percent}:propItems):ReactElement => (
  
  <StyledName percent={percent}>
    {text}
  </StyledName>
)


interface IProps {
  percent:number;
}


const StyledName = styled.div<IProps>`
${css`
  width: ${(props:IProps)=>props.percent+'%'};
`}
display:inline-block;
margin:auto;
text-align:center;
padding:0px 0px 0px 1em;
font-weight:bold;
`



export default ListName


