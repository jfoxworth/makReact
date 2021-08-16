
/*
*
*
*   
*
*/


// Standard React items
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';

// Component to show font awesome icon
import FaIcon from '../../FaIcon/FaIcon';

type propsObj = {
  title:string,
  link:string,
  icon:string,
  badge:boolean,
  badgeNum:number
}

const SidebarMenuItem:FC<propsObj> = ({title, link, icon, badge, badgeNum}):ReactElement => {

  return (

    <li>
      <Link href={link}>
        <a>
          <span style={{display:"contents"}}>
            {title}
            {
              badge && <span>{badgeNum}</span>
            }
            <FaIcon icon={icon} />
          </span>

        </a>
      </Link>
    </li>

  )
}

export default SidebarMenuItem;
