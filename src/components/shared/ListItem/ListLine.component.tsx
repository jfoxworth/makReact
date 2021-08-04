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
  children:ReactElement[] | ReactElement,
  percent?:number
}


const ListLine = ({children, percent=100}:propItems):ReactElement => (
  
  <StyledLine percent={percent}>
    {children}
  </StyledLine>
)

interface IProps {
  percent:number;
}


const StyledLine = styled.div`
${css`
  width: ${(props:IProps)=>props.percent+'%'};
`}
  margin:10px auto 0px auto;
  min-width:20em;
  padding:0px 0px 8px 0px;
  border-bottom:1px solid #acacac;
  display:block;
  `


export default ListLine


