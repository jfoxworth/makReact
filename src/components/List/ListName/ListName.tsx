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
  percent:number,
  height?:number | string
}


const ListName = ({text, percent, height='auto'}:propItems):ReactElement => (
  
  <StyledName percent={percent} height={height} >
    {text}
  </StyledName>
)


interface IProps {
  percent:number;
  height?:number|string
}


const StyledName = styled.div<IProps>`
${css`
  width: ${(props:IProps)=>props.percent+'%'};
  height:${(props:IProps)=>props.height};
`}
display:inline-block;
margin:auto;
text-align:center;
padding:0px 0px 0px 1em;
font-weight:bold;
`



export default ListName


