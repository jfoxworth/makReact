

// Standard React items
import { ReactElement } from 'react';

// Outside component
import ContentBoxHeader from './contentBoxHeader.component';
import ContentBoxContent from './contentBoxContent.component';
import ContentBoxColumn from './contentBoxColumn.component';
import ContentBoxItem from './contentBoxItem.component';


type propItems = {
  children:ReactElement[]
}


const ContentBox = ({children}:propItems):ReactElement => (
  
  <div className="flat-card profile-info-card is-auto">

    { children }
  
  </div>
)

ContentBox.ContentBoxHeader = ContentBoxHeader;
ContentBox.ContentBoxContent =  ContentBoxContent;
ContentBox.ContentBoxColumn = ContentBoxColumn;
ContentBox.ContentBoxItem = ContentBoxItem;


export default ContentBox


