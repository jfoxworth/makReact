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
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface propTypes {
  text:string;
  children?:ReactElement
}

const HeaderTitle:FC<propTypes> = ({text, children}):ReactElement => {

  return (
    <div className="account-title" style={{borderBottom:'1px solid #d6d6d6', paddingBottom:'10px', marginBottom:'10px'}}>
      <h2>
        <StyledText>{text.toUpperCase()}</StyledText>
        <StyledIcon>{children}</StyledIcon>
      </h2>
    </div>
  )
}


const StyledText = styled.div`
  display:inline;
`;

const StyledIcon = styled.div`
  padding:0px 0px 0px 1em;
  display:inline;
  top:4px;
`;


export default HeaderTitle
