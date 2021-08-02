
/*
*
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
*/

import React, { FC, ReactElement } from 'react';
import FaIcon from '../shared/faIcons/faIcon.component';

type formInputType = {
  handleChange:any,
  label?:string,
  placeholder?:string,
  type?:string,
  color?:string,
  name?:string,
  error?:boolean,
  icon?:string,
  errorMessage?:string
}


const FormInput :FC<formInputType> = ({ handleChange, 
                                        label, 
                                        placeholder='', 
                                        color='', 
                                        type='text', 
                                        name='',
                                        error=false,
                                        errorMessage='',
                                        icon='' }):ReactElement=>(

  <div className="field has-flex-label has-validation">

    <label>
        { label ? <span>{label}</span> : null }
        { error ? <span className="error">{errorMessage}</span> : null }
    </label>
    
    <div className="control is-bigger has-icon">

        <input type={type} 
               className="input" 
               name={name} 
               onChange={handleChange}
               placeholder={placeholder} />

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

export default FormInput

