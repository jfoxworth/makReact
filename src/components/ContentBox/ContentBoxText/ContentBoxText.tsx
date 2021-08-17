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
}

const ContentBoxText:FC<propItems> = ({text, icon='' }):ReactElement => (

  <>
    { 
      <StyledLine >
        <StyledIcon>{ icon != '' && <FaIcon icon={icon} /> }</StyledIcon>
        <StyledText>{text}</StyledText>
      </StyledLine>
    }
  </>

)

const StyledLine = styled.div`
    display:block;
    margin-bottom:1.5em;
`;

const StyledIcon = styled.div`
    display:inline-block;
    margin-right:1em;
`;

const StyledText = styled.div`
    display:inline-block;
`;


export default ContentBoxText


