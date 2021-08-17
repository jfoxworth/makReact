

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
  * The street address line
  */
  street:string,

  /*
  * The city, state, zip like
  */
  citystatezip:string,

  /*
  * The country
  */
  country:string
}

const AddressTile:FC<typeProps> = ({title, street, citystatezip, country}:typeProps):ReactElement => (

  <div className="address-widget is-narrow">
    <h3 className="widget-title">{title}</h3>
    <p className="address">
      <var id="shipping-address1">{street}</var>
      <br/><var id="shipping-city">{citystatezip}</var>
      <br/><var id="shipping-country">{country}</var>
    </p>
  </div>

)
export default AddressTile


