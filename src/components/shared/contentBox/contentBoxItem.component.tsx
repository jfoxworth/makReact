

// Standard React items
import { FC, ReactElement } from 'react';

import FormInput from '../forms/form-input.component';



type propItems = {
  name:string,
  text:string,
  editable:boolean,
  editStatus:boolean,
  handleChange:React.ChangeEventHandler<HTMLInputElement>
  icon?:string,
  id?:string
}

const ContentBoxItem:FC<propItems> = ({name, text, editable, editStatus, handleChange=()=>{}, icon, id='' }):ReactElement => (

  <>
    { 
      (!editable || !editStatus) && 
      <div className="info-block">
        <span className="label-text">{name}</span>
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


