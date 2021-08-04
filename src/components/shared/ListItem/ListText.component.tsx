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


const ListText = ({text, percent}:propItems):ReactElement => (
  
  <StyledText percent={percent}>
    {text}
  </StyledText>
)


interface IProps {
  percent:number;
}


const StyledText = styled.div<IProps>`
  display:inline-block;
  margin:auto;
  text-align:center;
  ${css`
  width: ${(props:IProps)=>props.percent+'%'};
  `}
`



export default ListText


