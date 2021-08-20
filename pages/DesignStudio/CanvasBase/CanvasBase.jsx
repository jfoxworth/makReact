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
*   This file is the top level component for a user viewing a design in the 3D studio.
*/

// Standard React items
import {FC, ReactElement } from 'react';
import styled from 'styled-components';

const CanvasBase = () => (

  <StyledCanvas id="modelbase" />
    
)

export default CanvasBase

const StyledCanvas =  styled.div`
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:200px;
  z-index:-1;
`;