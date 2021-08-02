

// Standard React items
import { FC, ReactElement } from 'react';

// Outside component
import FaIcon from '../faIcons/faIcon.component';


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


