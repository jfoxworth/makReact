

// Standard React items
import { FC, ReactElement } from 'react';

// Components
import FaIcon from '../../components/FaIcon';

interface typeProps {
  
  /*
  * The head of the tile
  */
  title:string,

  /*
  * The icon to be shown
  */
  icon:string,

  /*
  * The main text string
  */
  header:string,

  /*
  * The lower string
  */
  subtext:string,

  /*
  * The final text - possibly with a link
  */
  text:string,
}

const Tile:FC<typeProps> = ({title, icon, header, subtext, text}:typeProps):ReactElement => (

  <div id="payment-tile" className="order-stat">
    <h3>{title}</h3>
    <div className="order-stat-inner">
      <div className="icon-container">
        <h2><FaIcon icon={icon} /></h2>
      </div>
      <div className="meta">
        <span>{header}</span>
        <span>{subtext}</span>
        <span>{text}</span>
      </div>
    </div>
  </div>
)
export default Tile


