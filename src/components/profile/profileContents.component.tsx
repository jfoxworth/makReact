/*
*
*   
*
*/ 

// Standard React items
import { FC, ReactElement, SyntheticEvent, useState } from 'react';

// Redux items
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/user.selector';

// Components
import Tabs from '../shared/tabs/tabs.component';
import ProfileUser from './profileUser.components';
import ContentBox from '../shared/contentBox/contentBox.component';
import ContentBoxContent from '../shared/contentBox/contentBoxContent.component';
import ContentBoxColumn from '../shared/contentBox/contentBoxColumn.component';
import ContentBoxHeader from '../shared/contentBox/contentBoxHeader.component';


const ProfileContents:FC<any> = ():ReactElement => {

  let tabItems = [ 'Account', 'Projects' ];
  let [activeTab, setActiveTab]=useState(0);
  let [contentEditStatus, setContentEditStatus]=useState(false);

  // Handles when the tabs are clicked on
  const clickHandler = (event:SyntheticEvent, value:number) =>{
    setActiveTab(value);
    event.stopPropagation();
    event.preventDefault();
  };

  // Handles when the icon in the header is clicked so that the user can edit the items
  const handleEditClick = () =>{
    setContentEditStatus(!contentEditStatus);
  };


  // Handles when a user changes an input box
  const handleInputChange = () =>{

  }

  const user = useSelector(selectUser);


  return(

    <>
      <Tabs tabArray={tabItems} activeTab={activeTab} clickHandler={ clickHandler } />

      { user.currentUser &&

        <div id="account-main" className="columns is-account-grid is-multiline">

          <div className="column is-5">
            <ProfileUser />
          </div>

          <div className="column is-7">
            <ContentBox>
              <ContentBoxHeader title={"Account Details"} editable={true} handleEditClick={handleEditClick}/>
              <ContentBoxContent>
                <ContentBoxColumn width={'6'}>
                  <ContentBox.ContentBoxItem name={'Name'} text={user.currentUser.name} editable={true} editStatus={contentEditStatus} handleChange={handleInputChange} />
                  <ContentBox.ContentBoxItem name={'Display Name'} text={user.currentUser.displayName} editable={true} editStatus={contentEditStatus} handleChange={handleInputChange} />
                </ContentBoxColumn>
                <ContentBoxColumn width={'6'}>
                  <ContentBox.ContentBoxItem name={'Email'} text={'jfoxworth@cadwolf.com'} editable={false} editStatus={contentEditStatus} handleChange={handleInputChange} />
                  <ContentBox.ContentBoxItem name={'Phone Number'} text={'xxx-xxx-xxxx'} editable={true} editStatus={contentEditStatus} handleChange={handleInputChange} />
                </ContentBoxColumn>
              </ContentBoxContent>
            </ContentBox>
          </div>

        </div>
      }

    </>

  )
}

export default ProfileContents
