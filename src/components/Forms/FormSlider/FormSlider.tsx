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

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


type formSliderType = {
  handleChange:React.ChangeEventHandler<HTMLInputElement>,
  min?:number,
  max?:number,
  step?:number,
  dots?:boolean,
  defaultValue?:number
}


const FormSlider :FC<formSliderType> = ({ handleChange, 
                                          min=0,
                                          max=100,
                                          step=10,
                                          dots=false,
                                          defaultValue=0,
                                        }):ReactElement=>{


  return (

    <Slider min={min} max={max} step={step} dots={dots} defaultValue={defaultValue} onChange={()=>handleChange} />
  )
                  

}

export default FormSlider