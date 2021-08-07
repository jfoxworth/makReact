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

// Components
import FormInput from '../forms/form-input.component';
import FaIcon from '../faIcons/faIcon.component';


type propItems = {
  name:string,
  text:string,
  editable:boolean,
  editStatus:boolean,
  handleChange:React.ChangeEventHandler<HTMLInputElement>
  icon?:string,
  id?:string
}

const ContentBoxItem:FC<propItems> = ({name, text, editable, editStatus, handleChange=()=>{}, icon='', id='' }):ReactElement => (

  <>
    { 
      (!editable || !editStatus) && 
      <div className="info-block">
        <span className="label-text">
          { icon != '' && <FaIcon icon={icon} /> }
          {name}
        </span>
        <span id="account-first-name" className="label-value">{text ? text : '(No Value)'}</span>
      </div>
    }

    { 
      (editable && editStatus) && 
      <div className="info-block">
        <FormInput handleChange={handleChange} 
                  name={name}
                  icon={icon}
                  label={name}
                  placeholder={''}
                  value={text} 
                  type={"text"}
                  error={false}
                  id={id} />
      </div>
    }
  </>

)
export default ContentBoxItem


