

// Standard React items
import { FC, ReactElement } from 'react';

const Tabs:FC<{tabArray:string[], activeTab:number, clickHandler:any}> = ({tabArray, activeTab, clickHandler}):ReactElement => (

  <div className="tabs account-tabs">
    <ul>
      {
        tabArray.map((tabItem, tabIndex)=>(
          <li className={tabIndex===activeTab ? "is-active" : ""} key={"tab"+tabIndex}>
            <a onClick={(event)=>clickHandler(event, tabIndex)} >{tabItem}</a>
          </li>
        ))
      }
    </ul>
  </div>
)
export default Tabs


