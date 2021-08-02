

// Standard React items
import { FC, ReactElement } from 'react';

type propItems = {
  children:ReactElement[]
}

const ContentBoxContent = ({ children }:propItems):ReactElement => (
  
  <div className="card-body">
    <div className="columns">
      {children}
    </div>
  </div>


)


export default ContentBoxContent


