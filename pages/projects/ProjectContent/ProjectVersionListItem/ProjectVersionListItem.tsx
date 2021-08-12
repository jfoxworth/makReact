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
import React, { FC, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

// Hooks
import useTimeDate from '../../../../src/components/Hooks/useTimeDate';

// Models
import makVersion from '../../../../src/types/makVersion';

// Components
import FaIcon from '../../../../src/components/FaIcon';
import Link from 'next/link';


type propItems={
  thisVersion:makVersion,
  selectedVersionId:string,
  handleVersionClick?:Function
}


const ProjectVersionListItem:FC<propItems> = ({thisVersion, selectedVersionId, handleVersionClick=()=>{}}:propItems):ReactElement => {

  const thisTimeDate = useTimeDate(thisVersion.dateCreated, 'TMDY');

  return ( 
    <StyledLine isCurrent={selectedVersionId == thisVersion.id}>
      <StyledDate onClick={()=>handleVersionClick(thisVersion.id)}>{thisTimeDate}</StyledDate>
      <StyledName onClick={()=>handleVersionClick(thisVersion.id)}>{thisVersion.name}</StyledName>
      
      <StyledButton className={'has-tooltip-info has-tooltip-left'} 
                    data-tooltip="Open invoice" >
        <Link href={`/Invoice/${thisVersion.id}`} passHref>
          <StyledAnchor>
            <a href={`/Invoice/${thisVersion.id}`}>
            <FaIcon icon={'Dollar'} />
            </a>
          </StyledAnchor>
        </Link>
      </StyledButton>
      
      <StyledButton className={'has-tooltip-info has-tooltip-right'} 
                    data-tooltip="Create new version from this one" >
        <FaIcon icon={'Copy'} />
      </StyledButton>
    
    </StyledLine>

  )

}


interface IProps {
  isCurrent : boolean;
}


const StyledLine = styled.div<{isCurrent:boolean}>`
  margin:0px auto 0px auto;
  width:50%;
  min-width:20em;
  padding:8px 0px 8px 0px;
  border-bottom:1px solid #acacac;
  display:block;
  cursor:pointer;
  ${css`
    background-color: ${(props:IProps)=>props.isCurrent ? '#ACACAC' : ''};
    color: ${(props:IProps)=>props.isCurrent ? '#FFF' : ''};
  `}
`;

const StyledDate = styled.div`
  display:inline-flex;
  width:45%;
  padding:0px 0px 0px 1em;
`;

const StyledAnchor = styled.div`
a:link { color: inherit; }
a:visited { color: inherit; }
`;

const StyledName = styled.div`
  display:inline-flex;
  width:45%;
`;

const StyledButton = styled.div`
  display:inline-flex;
  width:5%;
  cursor:pointer;
  text-align:center;
`;


export default ProjectVersionListItem