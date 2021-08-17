/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/


// Standard React items
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

// Components
import FaIcon from '../../FaIcon/FaIcon';


type propItems = {
  text:string,
  icon?:string,
  clickHandler:Function
}

const ContentBoxText:FC<propItems> = ({text, icon='', clickHandler }):ReactElement => (

  <>
    { 
      <StyledLine >
        <StyledIconWrapper>
        <StyledIcon onClick={()=>clickHandler()}>{ icon != '' && <FaIcon icon={icon} /> }</StyledIcon>
        </StyledIconWrapper>
        <StyledText>{text}</StyledText>
      </StyledLine>
    }
  </>

)

const StyledLine = styled.div`
    display:block;
    margin-bottom:1.5em;
    position:relative;
    left:-5px;
`;

const StyledIcon = styled.div`
    display:inline-block;
    margin-right:1em;
    height:40px;
    width:40px;
    margin:0 2px;
    border:1.6px dashed transparent;
    transition:all .3s;
    cursor:pointer;
    border:1px dashed #fff;
    position:relative;
    right:12px;
    top:-10px;
    padding:8px 10px;
`;

const StyledIconWrapper = styled.div`
    display:inline-block;
    margin-right:1em;
    height:40px;
    width:40px;
    margin:0 2px;
    border:1.6px dashed transparent;
    transition:all .3s;
    cursor:pointer;
    &:hover ${StyledIcon} {
      border:1px dashed #B22222;
      border-radius:20px;
      position:relative;
      right:12px;
      top:-10px;
    }
`;
const StyledText = styled.div`
    display:inline-block;
    vertical-align:top;
`;


export default ContentBoxText


