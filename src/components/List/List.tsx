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
*/


// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


// Outside components
import ListHeader from './ListHeader/ListHeader';
import ListLine from './ListLine/ListLine';
import ListHeaderName from './ListHeaderName/ListHeaderName';
import ListHeaderText from './ListHeaderText/ListHeaderText';
import ListName from './ListName/ListName';
import ListText from './ListText/ListText';
import ListImage from './ListImage/ListImage';
import ListIcon from './ListIcon/ListIcon';

type propItems = {
  children:ReactElement[] | ReactElement
}


const ListContent = ({children}:propItems):ReactElement => (
  
  <StyledListContent>

    { children }
  
  </StyledListContent>
)

const StyledListContent = styled.div`
  vertical-align:top;
`;


ListContent.ListHeader = ListHeader;
ListContent.ListHeaderName = ListHeaderName;
ListContent.ListHeaderText = ListHeaderText;
ListContent.ListLine = ListLine;
ListContent.ListName = ListName;
ListContent.ListText = ListText;
ListContent.ListImage = ListImage;
ListContent.ListIcon = ListIcon;

export default ListContent


