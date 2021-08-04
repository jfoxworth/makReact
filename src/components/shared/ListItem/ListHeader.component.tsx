

// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


// Outside components


type propItems = {
  children:ReactElement[] | ReactElement,
  percent?:number
}


const ListHeader = ({children, percent=100}:propItems):ReactElement => (
  
  <StyledListHeader percent={percent}>
    {children}
  </StyledListHeader>
)

interface IProps {
  percent:number;
}

const StyledListHeader = styled.div`
${css`
  width: ${(props:IProps)=>props.percent+'%'};
`}
display:block;
margin:10px auto;
padding:20px 0px 8px 0px;
text-align:center;
font-weight:bold;
border-bottom:2px solid #acacac;
font-size:1.2em;
`


export default ListHeader


