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
import { ReactElement } from 'react';

// Components
import ContentBoxHeader from './ContentBoxHeader';
import ContentBoxContent from './ContentBoxContent';
import ContentBoxColumn from './ContentBoxColumn';
import ContentBoxItem from './ContentBoxItem';
import ContentBoxText from './ContentBoxText';
import ContentBoxAction from './ContentBoxAction';


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
ContentBox.ContentBoxText = ContentBoxText;
ContentBox.ContentBoxAction = ContentBoxAction;


export default ContentBox


