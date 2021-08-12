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

// Components
import FaIcon from '../../FaIcon/FaIcon';


type propItems = {
  icon:string,
  percent:number,
  height?:string
}


const ListIcon = ({icon, percent, height='auto'}:propItems):ReactElement => (
  
  <StyledText percent={percent} height={height}>
    <FaIcon icon={icon} />
  </StyledText>
)


interface IProps {
  percent:number,
  height:string
}


const StyledText = styled.div<IProps>`
  display:inline-block;
  margin:auto;
  text-align:center;
  vertical-align:middle;
  ${css`
  width: ${(props:IProps)=>props.percent+'%'};
  height:${(props:IProps)=>props.height};
  `}
`



export default ListIcon


