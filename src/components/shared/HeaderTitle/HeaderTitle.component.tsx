
// Standard React items
import { FC, ReactElement } from 'react';


const HeaderTitle:FC<{text:string}> = ({text}):ReactElement => (

  <div className="account-title" style={{borderBottom:'1px solid #d6d6d6', paddingBottom:'10px', marginBottom:'10px'}}>
    <h2>{text.toUpperCase()}</h2>
  </div>

)


export default HeaderTitle
