

// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


type propItems = {
  text:string,
  percent:number
}


const ListHeaderText = ({text, percent}:propItems):ReactElement => (
  
  <StyledHeaderText percent={percent}>
    {text}
  </StyledHeaderText>
)

interface IProps {
  percent:number;
}

const StyledHeaderText = styled.div<IProps>`
  ${css`
    width: ${(props:IProps)=>props.percent+'%'};
  `}
  display:inline-block;
  text-align:center;
`;

export default ListHeaderText

