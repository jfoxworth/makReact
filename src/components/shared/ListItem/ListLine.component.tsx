

// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


// Outside components


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


