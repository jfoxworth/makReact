

// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';


// Outside components
import ListHeader from './ListHeader.component';
import ListLine from './ListLine.component';
import ListHeaderName from './ListHeaderName.component';
import ListHeaderText from './ListHeaderText.component';
import ListName from './ListName.component';
import ListText from './ListText.component';

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


export default ListContent


