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
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
*/

// Standard React items
import { Children, FC, ReactElement } from 'react';
import styled from 'styled-components';

// Components
import FaIcon from '../FaIcon';

interface propTypes {
  text:string;
  icon:string;
  clickHandler:Function
}

const Hexagon:FC<propTypes> = ({text, icon, clickHandler}):ReactElement => {

  return (
    <>
      <StyledLeft onClick={()=>clickHandler(text)} />
      <StyledHex onClick={()=>clickHandler(text)}>
        <StyledIcon><FaIcon icon={icon} /></StyledIcon>
        <StyledText>{text}</StyledText>
      </StyledHex>
      <StyledRight onClick={()=>clickHandler(text)} />
    </>
  )
}


const StyledIcon = styled.div`
  font-size:3em;
  position:relative;
  top:20px;
  left:8px;
  color:#898989;
`;


const StyledLeft = styled.div`
  float: left;
  border-right: 30px solid #FFF;
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
  cursor:pointer;
`;


const StyledText = styled.div`
  transform: rotate(-60deg)
  skew(0deg);
  position:relative;
  right:-36px;
  bottom:8px;
  font-size:0.7em;
  color:#898989;
  text-align:center;
`;

const StyledHex = styled.div`
  float: left;
  width: 60px;
  height: 104px;
  background-color: #FFF;
  cursor:pointer;
  &:hover ${StyledIcon} {
    color:#000;
  }
  &:hover ${StyledText} {
    color:#000;
  }
`;

const StyledRight = styled.div`
  float: left;
  border-left: 30px solid #FFF;
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
  cursor:pointer;
  margin-right:68px;
`;



export default Hexagon
