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

// Imported Components
import ListContent from '../../shared/ListItem/ListContent.component';
import ListHeader from '../../shared/ListItem/ListHeader.component';
import ListHeaderName from '../../shared/ListItem/ListHeaderName.component';
import ListHeaderText from '../../shared/ListItem/ListHeaderText.component';
import ListLine from '../../shared/ListItem/ListLine.component';
import ListName from '../../shared/ListItem/ListName.component';
import ListText from '../../shared/ListItem/ListText.component';


type propItems={
  measurements:any[]
}

const ProjectVersionMeasurements:FC<propItems> = ({measurements}:propItems):ReactElement => {

  return ( 
    
    <ListContent>
      <ListHeader percent={60}>
        <ListHeaderName text={'Parameter Name'} percent={60} />
        <ListHeaderText text={'Value'} percent={40} />
      </ListHeader>
      <>
      {
        measurements.map((meas:any, index:number)=>(
          <ListLine percent={60} key={`meas${index}`}>
            <ListName text={meas.name} percent={60} />
            <ListText text={meas.value} percent={40} />
          </ListLine>
        ))
      }
      </>
    </ListContent>

  )

}

const StyledLine = styled.div`
  margin:10px auto 0px auto;
  width:50%;
  min-width:20em;
  padding:0px 0px 8px 0px;
  border-bottom:1px solid #acacac;
  display:block;
  `

const StyledName = styled.div`
display:inline-flex;
width:70%;
padding:0px 0px 0px 1em;
font-weight:bold;
`

const StyledData = styled.div`
display:inline-flex;
width:30%;
text-align:center;
margin:auto;
`

export default ProjectVersionMeasurements