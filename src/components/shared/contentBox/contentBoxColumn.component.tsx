

// Standard React items
import { FC, ReactElement } from 'react';

type propItems = {
  children:ReactElement[]
}

const ContentBoxColumn = ({ children }:propItems):ReactElement => (
  
  <div className="column is-6">
    {children}
  </div>

)

export default ContentBoxColumn


