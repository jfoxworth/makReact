

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


