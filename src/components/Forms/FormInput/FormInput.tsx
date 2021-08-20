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
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
*/

// Standard React Items
import React, { FC, ReactElement } from 'react';

// Components
import FaIcon from '../../FaIcon/FaIcon';


type formInputType = {
  handleChange:React.ChangeEventHandler<HTMLInputElement>,
  value?:string,
  label?:string,
  placeholder?:string,
  type?:string,
  name?:string,
  error?:boolean,
  icon?:string,
  errorMessage?:string,
  id?:string
}


const FormInput :FC<formInputType> = ({ handleChange, 
                                        value='',
                                        label, 
                                        placeholder='', 
                                        type='text', 
                                        name='',
                                        error=false,
                                        errorMessage='',
                                        icon='',
                                        id='' }):ReactElement=>{


  return (

    <div className="field has-flex-label has-validation">

      <label>
          { label ? <span>{label}</span> : null }
          { error ? <span className="error">{errorMessage}</span> : null }
      </label>
      
      <div className={`${icon!='' ? 'control has-icon is-bigger':''}`}>

          <input type={type} 
                className="input" 
                name={name} 
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                id={id} />

          { icon &&
          <div className="form-icon">
              <FaIcon icon={icon} />
          </div> }

          { error &&
          <div className="error-icon">
              <i data-feather="x"></i>
          </div> }

      </div>

    </div>
  )
                  

}

export default FormInput