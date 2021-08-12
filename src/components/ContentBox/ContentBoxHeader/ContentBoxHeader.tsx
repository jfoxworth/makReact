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

// Outside component
import FaIcon from '../../FaIcon/FaIcon';


type propItems = {
  title:string,
  editable:boolean,
  handleEditClick:Function
}


const ContentBoxHeader:FC<propItems> = ({title, editable, handleEditClick=()=>{}}):ReactElement => (
  
  <div className="card-title">
    <h3>{title}</h3>

    { editable &&
      <div className="edit-account has-simple-popover popover-hidden-mobile" 
           data-content="Edit Account" 
           data-placement="top"
           onClick={()=>handleEditClick()}>
          <a ><FaIcon icon={"Cog"} /></a>
      </div>
    }

  </div>

)


export default ContentBoxHeader


