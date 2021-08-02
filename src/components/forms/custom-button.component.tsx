
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


