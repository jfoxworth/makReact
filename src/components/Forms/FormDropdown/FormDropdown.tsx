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
import styled from 'styled-components';

// Components
import FaIcon from '../../FaIcon/FaIcon';


type formDropdownType = {
  handleChange:React.ChangeEventHandler<HTMLInputElement>,
  options:[],
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


const FormDropdown :FC<formDropdownType> = ({ handleChange, 
                                              options,
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
      

          <StyledSelect name={name} id={id} defaultValue={value}>
            {
              options.map((option:{value:string, label:string}, index) => (
                <option value={option.value} key={`dropdown${index}`}>{option.label}</option>
              ))
            }
          </StyledSelect>

          { icon &&
          <div className="form-icon">
              <FaIcon icon={icon} />
          </div> }

          { error &&
          <div className="error-icon">
              <i data-feather="x"></i>
          </div> }


    </div>
  )
                  

}

export default FormDropdown


const StyledSelect = styled.select`
  padding:10px;
  color:#343434;
  width:100%;
  border:1px solid #ccc;
  border-radius:8px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;