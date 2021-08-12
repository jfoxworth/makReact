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

// Standard React Items
import React, { FC, ReactElement } from 'react';


type buttonType = {
  handleClick:any,
  name:string,
  color?:string,
  classString?:string,
  label?:string
}


const CustomButton :FC<buttonType> = ({ color, label='Click', name='', classString='', handleClick }):ReactElement=>(

  <div className="button-wrap">
    <button id={name} 
            type="button" 
            name={name}
            color={color}
            className={`button ${classString}`} 
            onClick={handleClick}>
      {label}
    </button>
  </div>

)

export default CustomButton


